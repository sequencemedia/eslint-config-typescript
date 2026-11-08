declare module 'eslint-plugin-n' {
  import type {
    TSESLint as Linter
  } from '@typescript-eslint/utils'

  const plugin: Linter.FlatConfig.Plugin

  export default plugin
}

declare module 'eslint-plugin-promise' {
  import type {
    TSESLint as Linter
  } from '@typescript-eslint/utils'

  const plugin: Linter.FlatConfig.Plugin

  export default plugin
}
