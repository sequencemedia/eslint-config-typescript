import getMapMerge from '@sequencemedia/eslint-merge/get-map-merge'

import eslintConfig from './index.mjs'

function include ({ name }) {
  return name === '@sequencemedia/eslint-config-typescript'
}

function exclude ({ name }) {
  return name !== '@sequencemedia/eslint-config-typescript'
}

export default function mergeESLintConfigWith (config) {
  return (
    eslintConfig
      .filter(include)
      .concat(
        eslintConfig
          .filter(exclude)
          .map(getMapMerge(config))
      )
  )
}
