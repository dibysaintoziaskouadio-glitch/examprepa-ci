import { Logger } from '@nestjs/common';

export interface InitPaymentInput {
  transactionId: string;
  amountXof: number;
  description: string;
  customer: { firstName: string; lastName: string; phone?: string | null; email?: string | null };
  notifyUrl: string;
  returnUrl: string;
}

export interface PaymentProvider {
  readonly name: string;
  /** Renvoie l'URL de la page de paiement où rediriger l'utilisateur. */
  init(input: InitPaymentInput): Promise<{ redirectUrl: string; providerRef?: string }>;
  /** Interroge l'agrégateur : statut final du paiement. */
  check(transactionId: string): Promise<{ status: 'SUCCESS' | 'FAILED' | 'PENDING'; channel?: string; raw: unknown }>;
}

/** Fournisseur de démonstration : une page interne simule Orange Money, MTN, Moov ou Wave. */
export class MockProvider implements PaymentProvider {
  readonly name = 'mock';
  constructor(private readonly appUrl: string) {}
  async init(input: InitPaymentInput) {
    return { redirectUrl: `${this.appUrl}/paiement/simulation/${input.transactionId}` };
  }
  async check() {
    return { status: 'PENDING' as const, raw: null };
  }
}

/**
 * CinetPay (agrégateur ivoirien : Orange Money, MTN MoMo, Moov Money, Wave, cartes).
 * API « checkout v2 » : initialisation puis vérification du statut côté serveur.
 * Le webhook ne fait jamais confiance au contenu reçu : il revérifie toujours auprès de CinetPay.
 */
export class CinetPayProvider implements PaymentProvider {
  readonly name = 'cinetpay';
  private readonly logger = new Logger('CinetPay');
  private readonly base = process.env.CINETPAY_API_URL ?? 'https://api-checkout.cinetpay.com/v2';
  constructor(
    private readonly apiKey: string,
    private readonly siteId: string,
  ) {}

  async init(input: InitPaymentInput) {
    const res = await fetch(`${this.base}/payment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        apikey: this.apiKey,
        site_id: this.siteId,
        transaction_id: input.transactionId,
        amount: input.amountXof, // multiple de 5
        currency: 'XOF',
        // CinetPay déconseille les caractères spéciaux (# / $ _ &) dans les valeurs
        description: input.description.replace(/[#/$_&]/g, ' '),
        notify_url: input.notifyUrl,
        return_url: input.returnUrl,
        channels: 'ALL',
        lang: 'FR',
        customer_name: input.customer.lastName,
        customer_surname: input.customer.firstName,
        customer_phone_number: input.customer.phone ?? undefined,
        customer_email: input.customer.email ?? undefined,
      }),
    });
    const json = (await res.json().catch(() => ({}))) as { code?: string; message?: string; data?: { payment_url?: string; payment_token?: string } };
    if (!json.data?.payment_url) {
      this.logger.error(`Initialisation refusée : ${json.code} ${json.message}`);
      throw new Error('Le service de paiement est indisponible. Réessaie plus tard.');
    }
    return { redirectUrl: json.data.payment_url, providerRef: json.data.payment_token };
  }

  async check(transactionId: string) {
    const res = await fetch(`${this.base}/payment/check`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ apikey: this.apiKey, site_id: this.siteId, transaction_id: transactionId }),
    });
    const json = (await res.json().catch(() => ({}))) as { code?: string; data?: { status?: string; payment_method?: string } };
    const s = json.data?.status;
    const status = json.code === '00' && s === 'ACCEPTED' ? 'SUCCESS' : s === 'REFUSED' || s === 'CANCELED' ? 'FAILED' : 'PENDING';
    return { status: status as 'SUCCESS' | 'FAILED' | 'PENDING', channel: json.data?.payment_method, raw: json };
  }
}

export function createProvider(): PaymentProvider {
  const appUrl = process.env.APP_URL ?? 'http://localhost:5174';
  if (process.env.PAYMENT_PROVIDER === 'cinetpay') {
    const { CINETPAY_API_KEY, CINETPAY_SITE_ID } = process.env;
    if (!CINETPAY_API_KEY || !CINETPAY_SITE_ID) throw new Error('CINETPAY_API_KEY et CINETPAY_SITE_ID sont requis');
    return new CinetPayProvider(CINETPAY_API_KEY, CINETPAY_SITE_ID);
  }
  return new MockProvider(appUrl);
}
