import parser from '@typescript-eslint/parser'
import stylistic from './stylistic.mjs'
import typescript from './typescript.mjs'

export default {
  name: '@sequencemedia/eslint-config-typescript/recommended',
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
  ],
  plugins: {
    ...stylistic.plugins,
    ...typescript.plugins
  },
  rules: {
    ...stylistic.rules,
    ...typescript.rules
  }
}
