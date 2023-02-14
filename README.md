## Description

Providing Tailwind CSS support for [@web/dev-server](https://github.com/modernweb-dev/web).

## Install

```console
npm i dev-server-tailwindcss -D
```

## Usage

**`web-dev-server.config.js`**

```js
import tailwindcssPlugin from 'dev-server-tailwindcss';

export default {
  ...
  plugins: [tailwindcssPlugin()],
};
```

## postcss.config.js

Use the ES module for the configuration file and add `"type": "module"` in package.json.

Minimize CSS code after compiling tailwindcss.

```js
import tailwindcss from 'tailwindcss';
import cssnano from 'cssnano';

export default {
  plugins: [
    tailwindcss,
    cssnano({ preset: ['default', { discardComments: { removeAll: true } }] })
  ],
};
```

## Dev and Prod

```js
import tailwindcss from 'tailwindcss';
import cssnano from 'cssnano';

const isDevelopment = process.argv.some(arg => /--watch|-w|dev-server/.test(arg));

const plugins = isDevelopment
  ? [tailwindcss]
  : [tailwindcss, cssnano({ preset: ['default', { discardComments: { removeAll: true } }] })];

export default {
  plugins,
};
```