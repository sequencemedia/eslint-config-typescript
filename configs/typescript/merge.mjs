import merge from '@sequencemedia/eslint-merge'

import eslintConfig from '#eslint-config-typescript/configs/typescript'

export default function mergeESLintConfigWith (config) {
  return (
    merge(eslintConfig, config)
  )
}
