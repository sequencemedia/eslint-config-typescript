import globals from 'globals'
import {
  configs
} from '@sequencemedia/eslint-config-standard'

export default [
  {
    ...configs.recommended,
    files: [
      '**/*.{mjs,cjs}'
    ],
    ignores: [
      'test'
    ],
    languageOptions: {
      ...configs.recommended.languageOptions,
      globals: {
        ...configs.recommended.languageOptions.globals,
        ...globals.node
      }
    }
  },
  {
    ...configs.recommended,
    files: [
      'test/**/*.{mjs,cjs}'
    ],
    languageOptions: {
      ...configs.recommended.languageOptions,
      globals: {
        ...configs.recommended.languageOptions.globals,
        ...globals.mocha
      }
    }
  }
]
