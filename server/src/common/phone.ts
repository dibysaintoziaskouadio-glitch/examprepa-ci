import { BadRequestException } from '@nestjs/common';

/**
 * Normalise un numéro ivoirien (10 chiffres depuis 2021 : 01, 05, 07, 21, 25, 27)
 * au format international +225XXXXXXXXXX.
 */
export function normalizePhone(input: string): string {
  let digits = (input ?? '').replace(/[^\d+]/g, '');
  if (digits.startsWith('+225')) digits = digits.slice(4);
  else if (digits.startsWith('00225')) digits = digits.slice(5);
  else if (digits.startsWith('225') && digits.length === 13) digits = digits.slice(3);
  if (!/^(01|05|07|21|25|27)\d{8}$/.test(digits)) {
    throw new BadRequestException('Numéro de téléphone invalide (10 chiffres, ex. 07 01 02 03 04)');
  }
  return `+225${digits}`;
}
