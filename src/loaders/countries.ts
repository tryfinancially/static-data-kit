import countries from '../data/countries.json';
import { Country } from '../types';

export function getAllCountries(): Country[] {
  return countries;
}

export function getCountryByAlpha2Code(code: string): Country | undefined {
  return countries.find(
    (c) => c.isoAlpha2Code.toUpperCase() === code.toUpperCase()
  );
}

export function getCountryByAlpha3Code(code: string): Country | undefined {
  return countries.find(
    (c) => c.isoAlpha3Code.toUpperCase() === code.toUpperCase()
  );
}
