# Static Data Kit

[![NPM Downloads](https://img.shields.io/npm/dm/@financially/static-data-kit.svg)](https://www.npmjs.com/package/@financially/static-data-kit)
[![Version](https://img.shields.io/npm/v/@financially/static-data-kit.svg)](https://www.npmjs.com/package/@financially/static-data-kit)

A TypeScript-first utility library for accessing and using high-quality static reference data in SaaS, B2B, and analytics applications.

---

## ✨ Why Static Data Kit?

When building SaaS platforms, you often need consistent, high-quality static data for:

- Countries
- Currencies
- States or provinces
- Job roles and industries
- Regional formats

But existing datasets are often:

- Incomplete or poorly structured
- Behind paywalls or APIs
- Unreliable or inconsistently formatted

**Static Data Kit** solves this by offering a clean, typed, offline-friendly dataset with standardized fields — perfect for use in onboarding flows, settings screens, or seed data in any modern app.

---

## 📦 Installation

```bash
npm install @financially/static-data-kit
# or
yarn add @financially/static-data-kit
# or
pnpm add @financially/static-data-kit
```

---

## 🌍 Countries

### ✅ Methods

```ts
getAllCountries(): Country[]
getCountryByAlpha2Code(code: string): Country | undefined
getCountryByAlpha3Code(code: string): Country | undefined
```

### 🔍 Example

```ts
import {
  getAllCountries,
  getCountryByAlpha2Code,
} from '@financially/static-data-kit';

const countries = getAllCountries();
const india = getCountryByAlpha2Code('IN');
console.log(india?.flagFile); // "IN.svg" - you can append this to your S3 bucket domain and use it
```

### 📘 Interface

```ts
interface Country {
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
```

---

## 💱 Currencies

### ✅ Methods

```ts
getAllCurrencies(): Currency[]
getCurrencyByAlpha3Code(code: string): Currency | undefined
getCurrenciesByCountryCode(countryCode: string): Currency[]
```

### 🔍 Example

```ts
import {
  getCurrencyByAlpha3Code,
  getCurrenciesByCountryCode,
} from '@financially/static-data-kit';

const usd = getCurrencyByAlpha3Code('USD');
const swiss = getCurrenciesByCountryCode('CH');
```

### 📘 Interface

```ts
interface Currency {
  name: string;
  isoAlpha3Code: string;
  symbol: string;
  isoNumericCode: string;
  minorUnit: string;
  supportedCountryCodes: string[];
}
```

---

## 🗺️ States / Provinces

### ✅ Methods

```ts
getAllStates(): State[]
getStateByCode(code: string): State | undefined
getStatesByCountryCode(countryCode: string): State[]
```

### 🔍 Example

```ts
import { getStatesByCountryCode } from '@financially/static-data-kit';

const usStates = getStatesByCountryCode('US');
```

### 📘 Interface

```ts
interface State {
  name: string;
  code: string;
  countryCode: string;
  type: string;
}
```

---

## 🏭 Industries

### ✅ Methods

```ts
getAllIndustries(): Industry[]
getIndustryBySlug(slug: string): Industry | undefined
```

### 🔍 Example

```ts
import { getAllIndustries } from '@financially/static-data-kit';

const industries = getAllIndustries();
```

### 📘 Interface

```ts
interface Industry {
  name: string;
  slug: string;
}
```

---

## 👨‍💼 Job Roles

### ✅ Methods

```ts
getAllJobRoles(): JobRole[]
getJobRoleBySlug(slug: string): JobRole | undefined
getJobRolesByCategorySlug(slug: string): JobRole[]
```

### 🔍 Example

```ts
import { getJobRolesByCategorySlug } from '@financially/static-data-kit';

const execRoles = getJobRolesByCategorySlug('executive-leadership');
```

### 📘 Interface

```ts
interface JobRole {
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
}
```

---

## 🌐 Regional Settings

### ✅ Methods

```ts
getAllRegionalSettings(): RegionalSetting[]
getRegionalSettingByCountryCode(code: string): RegionalSetting | undefined
```

### 🔍 Example

```ts
import {
  getRegionalSettingByCountryCode,
  getAllRegionalSettings,
} from '@financially/static-data-kit';

const usSettings = getRegionalSettingByCountryCode('US');
const all = getAllRegionalSettings();
```

### 📘 Interface

```ts
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
```

All the timezone values are used according to proper ISO format. We use the package: [https://github.com/vvo/tzdb/](https://github.com/vvo/tzdb/)

---

## 🧪 Type Safety

All datasets are fully typed with TypeScript. You get complete IntelliSense, validation, and autocomplete support out-of-the-box.

---

## 📁 Asset Access (Flags)

All country flags are stored as SVGs with filenames like:

```
IN.svg
US.svg
...
```

Each country object includes a `flagFile` field:

```json
"flagFile": "IN.svg"
```

You can use this to construct the full flag URL using your own asset CDN or static hosting service.

### ✅ Usage Example

```ts
import { getCountryByAlpha2Code } from '@financially/static-data-kit';

const CDN_BASE_URL = 'https://assets.your-domain.com/countries/';
const country = getCountryByAlpha2Code('IN');

const flagFile = `${CDN_BASE_URL}${country.flagFile}`;
console.log(flagFile);
// Output: https://assets.your-domain.com/countries/IN.svg
```

---

## 🤝 Contributing

PRs are welcome! Please follow these guidelines:

- Keep entries alphabetically sorted where appropriate
- Ensure field consistency and valid JSON
- Add new types to `src/types/index.ts`
- Store new country flags in `src/assets/countries/XX.svg`

See [CONTRIBUTING.md](./CONTRIBUTING.md) for more details.

---

## 👤 Author

**Suprith Reddy** – Creator & Maintainer
[github.com/suprith-s-reddy](https://github.com/suprith-s-reddy)

Built with ❤️ at [Financially](https://tryfinancially.com) modern SaaS products.

---

## 📄 License

MIT
