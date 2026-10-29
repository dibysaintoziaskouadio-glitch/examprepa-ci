import { Injectable, Logger } from '@nestjs/common';

/**
 * Envoi de SMS. En MVP le message est seulement journalisé ;
 * en production, brancher ici un agrégateur couvrant Orange, MTN et Moov.
 */
@Injectable()
export class SmsService {
  private readonly logger = new Logger('SMS');

  async send(phone: string, message: string) {
    if (process.env.NODE_ENV === 'production' && !process.env.SMS_PROVIDER) {
      this.logger.error(`Aucun fournisseur SMS configuré : message non envoyé à ${phone}`);
      return;
    }
    this.logger.log(`→ ${phone} : ${message}`);
  }
}
