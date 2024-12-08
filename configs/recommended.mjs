import {
  parser
} from 'typescript-eslint'
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
    ...typescript.plugins
  },
  rules: {
    ...typescript.rules
  }
}
