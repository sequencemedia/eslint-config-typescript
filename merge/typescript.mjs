import merge from '@sequencemedia/eslint-merge'

import CONFIG from '#eslint-config-typescript/configs/typescript'

export default function mergeConfig (config) {
  return (
    merge(
      CONFIG,
      config
    )
  )
}
