import type {
  TSESLint as Linter
} from '@typescript-eslint/utils'

export type StylisticConfig = Linter.FlatConfig.Config

declare const config: StylisticConfig

export default config
