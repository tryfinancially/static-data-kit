import rawCurrencies from '../data/currencies.json';
import { Currency } from '../types';

const currencies = rawCurrencies as Currency[];

export function getAllCurrencies(): Currency[] {
  return currencies;
}

export function getCurrencyByAlpha3Code(code: string): Currency | undefined {
  return currencies.find(
    (c) => c.isoAlpha3Code.toUpperCase() === code.toUpperCase()
  );
}

export function getCurrenciesByCountryCode(countryCode: string): Currency[] {
  return currencies.filter((c) =>
    c.supportedCountryCodes.includes(countryCode.toUpperCase())
  );
}
