import mergeWith from '@sequencemedia/eslint-merge/merge-with'

import eslintConfig from './index.mjs'

export default function mergeESLintConfigWith (config) {
  return (
    eslintConfig
      .map(mergeWith(config))
  )
}
