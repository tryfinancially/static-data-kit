# Contributing to Static Data Kit

Thanks for your interest in contributing!

This project provides high-quality static reference data for SaaS platforms and enterprise products. Contributions are welcome — from fixing typos to adding new datasets.

---

## 🛠️ How to Contribute

1. **Clone the repo**
2. **Run locally** using `pnpm install && pnpm build`
3. **Create a feature branch**
4. **Make your changes**
5. **Submit a Pull Request**

---

## ✍️ Guidelines

### ✅ JSON Format

- Always use valid JSON syntax
- Keep entries alphabetically ordered where applicable (e.g. countries, job roles)
- Ensure fields are consistent with their TypeScript types

### ✅ Types

If you add a new data file, define a matching type in `src/types/index.ts`.

### ✅ Loaders

Each file in `src/data` should have:

- A corresponding loader in `src/loaders/`
- Functions like `getAllX()` and `getXByY()`

### ✅ Assets (Flags)

- Store flag SVGs inside `src/assets/countries/XX.svg`
- File names must match `isoAlpha2Code` (uppercase)
- In JSON, the `flagUrl` must match the relative path: `assets/countries/XX.svg`

---

## 📦 Build & Test

```bash
pnpm build
```

---

## 📄 License

All contributions will be licensed under the MIT license.
