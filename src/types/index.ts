import { DateFormat, TimeFormat, WeekStart } from './enums';

export interface Country {
  commonName: string;
  officialName: string;
  isoAlpha2Code: string;
  isoAlpha3Code: string;
  countryNumericCode: string;
  isoAlpha2SubDivisionCode: string;
  region: string;
  subRegion: string;
  regionCode: string;
  subRegionCode: string;
  flagUnicode: string;
  flagFile: string;
  phonePrefix: string;
}

export interface State {
  name: string;
  code: string;
  countryCode: string;
  type: string;
}

export interface RegionalSetting {
  countryCode: string;
  dateFormat: DateFormat;
  timeFormat: TimeFormat;
  weekStartsOn: WeekStart;
  defaultTimeZone: string; // e.g. "Asia/Phnom_Penh"
  numberFormat: {
    format: string; // e.g. "comma-thousand-dot-decimal"
    example: string; // e.g. "1,234.56"
    groupingStyle: number[]; // e.g. [3]
    decimalSeparator: string; // e.g. "."
    thousandSeparator: string; // e.g. ","
  };
}

export interface Currency {
  name: string;
  isoAlpha3Code: string;
  symbol: string;
  isoNumericCode: string;
  minorUnit: string;
  supportedCountryCodes: string[];
}

export interface Industry {
  name: string;
  slug: string;
}

export interface JobRole {
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
}
