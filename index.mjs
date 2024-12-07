import {
  parser
} from 'typescript-eslint'
import recommended from '#eslint-config-typescript/configs/recommended'
import typescript from '#eslint-config-typescript/configs/typescript'

export const configs = {
  recommended,
  typescript
}

export default [
  {
    name: '@sequencemedia/eslint-config-typescript',
    languageOptions: {
      parser,
      parserOptions: {
        projectService: true
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error'
    },
    files: [
      '**/*.{ts,mts,cts}'
    ]
  },
  typescript
]
