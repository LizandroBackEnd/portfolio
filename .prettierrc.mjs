/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  bracketSpacing: true,
  bracketSameLine: true,
  trailingComma: 'none',
  singleQuote: true
}
