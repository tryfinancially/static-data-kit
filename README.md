# Static Data Kit

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
console.log(india?.flagUrl); // "assets/countries/in.svg"
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
  region_code: string;
  subRegionCode: string;
  flagUnicode: string;
  flagUrl: string;
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
interface RegionalSetting {
  countryCode: string;
  dateFormat: string;
  timeFormat: string;
  weekStartsOn: 'monday' | 'sunday';
  defaultTimeZone: string;
  numberFormat: {
    format: string;
    example: string;
    groupingStyle: number[];
    decimalSeparator: string;
    thousandSeparator: string;
  };
}
```

---

## 🧪 Type Safety

All datasets are fully typed with TypeScript. You get complete IntelliSense, validation, and autocomplete support out-of-the-box.

---

## 📁 Asset Access (Flags)

- All country flags are SVGs stored under:

```
src/assets/countries/IN.svg
src/assets/countries/US.svg
...
```

- The `flagUrl` in each country points to:

```json
"flagUrl": "assets/countries/in.svg"
```

- To resolve at runtime:

```ts
import { getCountryByAlpha2Code } from '@financially/static-data-kit';

const country = getCountryByAlpha2Code('IN');
const flagPath = require.resolve('static-data-kit/' + country.flagUrl);
```

This ensures compatibility with Node.js, bundlers like Webpack, Vite, etc.

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
