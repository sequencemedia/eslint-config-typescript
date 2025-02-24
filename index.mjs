import parser from '@typescript-eslint/parser'
import recommended from '#eslint-config-typescript/configs/recommended'
import typescript from '#eslint-config-typescript/configs/typescript'
import stylistic from '#eslint-config-typescript/configs/stylistic'

export const configs = {
  recommended,
  typescript,
  stylistic
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
  typescript,
  stylistic
]
