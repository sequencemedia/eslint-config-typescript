import globals from 'globals'
import merge from '@sequencemedia/eslint-config-standard/merge'

export default [
  ...merge({
    files: [
      '**/*.{mjs,cjs}'
    ],
    ignores: [
      'test'
    ],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  }),
  ...merge({
    files: [
      'test/**/*.{mjs,cjs}'
    ],
    languageOptions: {
      globals: {
        ...globals.mocha
      }
    }
  })
]
