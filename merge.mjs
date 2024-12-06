import getMapMerge from '@sequencemedia/eslint-merge/get-map-merge'

import eslintConfig from './index.mjs'

export default function mergeESLintConfigWith (config) {
  return (
    eslintConfig
      .map(getMapMerge(config))
  )
}
