module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  globals: {
    $: 'readonly',
    jQuery: 'readonly',
    lcsMatch: 'readonly'
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'comma-dangle': 'off',
    // 'comma-dangle': ['error', 'never'], // 尾逗号：不需要
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // semi: ["error", "never"]
    semi: 'off'
  }
}
