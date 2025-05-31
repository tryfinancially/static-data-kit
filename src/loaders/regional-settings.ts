import rawRegionalSettings from '../data/regional-settings.json';
import { RegionalSetting } from '../types';

const regionalSettings = rawRegionalSettings as RegionalSetting[];

export function getAllRegionalSettings(): RegionalSetting[] {
  return regionalSettings;
}

export function getRegionalSettingByCountryCode(
  code: string
): RegionalSetting | undefined {
  return regionalSettings.find(
    (setting) => setting.countryCode.toUpperCase() === code.toUpperCase()
  );
}
