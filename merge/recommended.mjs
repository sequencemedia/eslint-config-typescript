import merge from '@sequencemedia/eslint-merge'

import CONFIG from '#eslint-config-typescript/configs/recommended'

export default function mergeConfig (config) {
  return (
    merge(
      CONFIG,
      config
    )
  )
}
