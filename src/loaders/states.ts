import rawStates from '../data/states.json';
import { State } from '../types';

const states = rawStates as State[];

export function getAllStates(): State[] {
  return states;
}

export function getStateByCode(code: string): State | undefined {
  return states.find((s) => s.code === code.toUpperCase());
}

export function getStatesByCountryCode(countryCode: string): State[] {
  return states.filter(
    (s) => s.countryCode.toUpperCase() === countryCode.toUpperCase()
  );
}
