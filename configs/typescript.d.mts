import type {
  TSESLint as Linter
} from '@typescript-eslint/utils'

export type TypeScriptConfig = Linter.FlatConfig.Config

declare const config: TypeScriptConfig

export default config
