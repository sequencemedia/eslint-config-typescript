import parser from '@typescript-eslint/parser'
import recommended from './configs/recommended.mjs'
import typescript from './configs/typescript.mjs'

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
        projectService: true,
        project: 'tsconfig.json'
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
