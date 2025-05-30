/**
 *  @typedef {import('@typescript-eslint/utils').TSESLint.FlatConfig.Config} Config
 */

import merge from '@sequencemedia/eslint-merge'

import eslintConfig from '#eslint-config-typescript/configs/typescript'

/**
 *  @param {Config} config
 *  @returns {Config}
 */
export default function mergeESLintConfigWith (config) {
  return (
    merge(eslintConfig, config)
  )
}
