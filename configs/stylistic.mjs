import stylistic from '@stylistic/eslint-plugin'

export default {
  name: '@sequencemedia/eslint-config-typescript/stylistic',
  plugins: {
    '@stylistic/ts': stylistic
  },
  rules: {
    /**
     *  `@stylistic/eslint-plugin`
     */
    '@stylistic/ts/comma-dangle': [
      'error',
      'never'
    ],
    '@stylistic/ts/comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ]
  }
}
