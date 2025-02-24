import type {
  TSESLint as Linter
} from '@typescript-eslint/utils'

import type {
  RecommendedConfig
} from './configs/recommended.mjs'

import type {
  TypeScriptConfig
} from './configs/typescript.mjs'

import type {
  StylisticConfig
} from './configs/stylistic.mjs'

declare const configs: {
  recommended: RecommendedConfig,
  typescript: TypeScriptConfig,
  stylistic: StylisticConfig
}

export {
  configs
}

declare const config: Linter.FlatConfig.Config[]

export default config
