# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Meta Pixel + Conversions API

This project now supports:

- Browser-side Meta Pixel tracking
- Server-side Meta Conversions API through the same app on production

### Production setup

1. Set frontend build env in [.env.production](.env.production):

  - `VITE_ENABLE_META_CAPI=true`

2. Set server runtime env on the VPS:

  - `META_PIXEL_ID=1340019154853536`
  - `META_CONVERSION_TOKEN=YOUR_META_CONVERSION_TOKEN`
  - Optional: `META_TEST_EVENT_CODE=TEST12345`

  You can place these in a root `.env` file on the VPS; `server.js` loads it at runtime.

3. Build and start the app:

  - `npm run build`
  - `npm start`

### Notes

- The Meta token stays server-side in [server.js](server.js).
- `/api/meta-conversions` is only used in production when `VITE_ENABLE_META_CAPI=true`.
