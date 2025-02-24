import type {
  TSESLint as Linter
} from '@typescript-eslint/utils'

export type RecommendedConfig = Linter.FlatConfig.Config

declare const config: RecommendedConfig

export default config
