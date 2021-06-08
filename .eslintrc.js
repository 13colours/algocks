/* eslint-disable */
module.exports = {
  root: true,
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: `module`,
  },
  plugins: [`@typescript-eslint`, `prettier`],
  extends: [
    `eslint:recommended`,
    `plugin:@typescript-eslint/recommended`,
    `eslint-config-prettier`,
  ],
  rules: {
    quotes: [`error`, `backtick`],
    '@typescript-eslint/explicit-function-return-type': 2,
  },
}
