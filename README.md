# Sigi framework `CRA` example

## Customize babel config in `CRA` project

### 1. Install dependencies and babel plugins

```bash
 yarn install @babel/plugin-proposal-decorators babel-plugin-transform-typescript-metadata customize-cra react-app-rewired --dev
```

### 2. Change scripts in package.json
```diff
/* package.json */

  "scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
    "eject": "react-scripts eject"
}
```

### 3. Add config-overrides.js and .babelrc

```js
const { override, useBabelRc } = require('customize-cra');

module.exports = override(
  useBabelRc()
);
```

```json
{
  "plugins": [
    "babel-plugin-transform-typescript-metadata",
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ]
}
```