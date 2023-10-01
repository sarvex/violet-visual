// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  printWidth: 100,
  bracketSameLine: true,
  astroAllowShorthand: true,

  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}

export default config
