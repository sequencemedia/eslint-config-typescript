import type {
  TSESLint as Linter
} from '@typescript-eslint/utils'

type Config = Linter.FlatConfig.Config

export default function mergeESLintConfigWith (config: Config): Config
