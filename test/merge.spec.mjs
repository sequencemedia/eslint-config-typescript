import {
  expect
} from 'chai'

import eslintConfig from '@sequencemedia/eslint-config-typescript'

import merge from '@sequencemedia/eslint-config-typescript/merge'

describe('@sequencemedia/eslint-config-typescript/merge', () => {
  describe('`merge`', () => it('is a function', () => expect(merge).to.be.a('function')))

  describe('`merge()`', () => {
    describe('Always', () => it('returns an array', () => expect(merge()).to.be.an('array')))

    describe('Merges', () => {
      const [
        DEFAULT,
        STYLISTIC,
        TYPESCRIPT
      ] = eslintConfig

      it('returns an array', () => {
        const MOCK_FILES = [
          'MOCK FILES'
        ]
        const MOCK_IGNORES = [
          'MOCK IGNORES'
        ]
        const MOCK_LANGUAGE_OPTIONS = {
          mockOption: 'MOCK LANGUAGE OPTIONS'
        }
        const MOCK_LINTER_OPTIONS = {
          mockOption: 'MOCK LINTER OPTIONS'
        }
        const MOCK_PLUGINS = {
          mockOption: 'MOCK PLUGINS'
        }
        const MOCK_RULES = {
          mockOption: 'MOCK RULES'
        }
        const MOCK_SETTINGS = {
          mockOption: 'MOCK SETTINGS'
        }

        const {
          languageOptions: STYLISTIC_LANGUAGE_OPTIONS,
          linterOptions: STYLISTIC_LINTER_OPTIONS,
          plugins: STYLISTIC_PLUGINS,
          rules: STYLISTIC_RULES,
          settings: STYLISTIC_SETTINGS
        } = STYLISTIC

        const {
          languageOptions: TYPESCRIPT_LANGUAGE_OPTIONS,
          linterOptions: TYPESCRIPT_LINTER_OPTIONS,
          plugins: TYPESCRIPT_PLUGINS,
          rules: TYPESCRIPT_RULES,
          settings: TYPESCRIPT_SETTINGS
        } = TYPESCRIPT

        return (
          expect(
            merge({
              files: MOCK_FILES,
              ignores: MOCK_IGNORES,
              languageOptions: MOCK_LANGUAGE_OPTIONS,
              linterOptions: MOCK_LINTER_OPTIONS,
              plugins: MOCK_PLUGINS,
              rules: MOCK_RULES,
              settings: MOCK_SETTINGS
            })
          )
            .to.eql([
              DEFAULT,
              {
                ...STYLISTIC,
                files: MOCK_FILES,
                ignores: MOCK_IGNORES,
                languageOptions: {
                  ...STYLISTIC_LANGUAGE_OPTIONS,
                  ...MOCK_LANGUAGE_OPTIONS
                },
                linterOptions: {
                  ...STYLISTIC_LINTER_OPTIONS,
                  ...MOCK_LINTER_OPTIONS
                },
                plugins: {
                  ...STYLISTIC_PLUGINS,
                  ...MOCK_PLUGINS
                },
                rules: {
                  ...STYLISTIC_RULES,
                  ...MOCK_RULES
                },
                settings: {
                  ...STYLISTIC_SETTINGS,
                  ...MOCK_SETTINGS
                }
              },
              {
                ...TYPESCRIPT,
                files: MOCK_FILES,
                ignores: MOCK_IGNORES,
                languageOptions: {
                  ...TYPESCRIPT_LANGUAGE_OPTIONS,
                  ...MOCK_LANGUAGE_OPTIONS
                },
                linterOptions: {
                  ...TYPESCRIPT_LINTER_OPTIONS,
                  ...MOCK_LINTER_OPTIONS
                },
                plugins: {
                  ...TYPESCRIPT_PLUGINS,
                  ...MOCK_PLUGINS
                },
                rules: {
                  ...TYPESCRIPT_RULES,
                  ...MOCK_RULES
                },
                settings: {
                  ...TYPESCRIPT_SETTINGS,
                  ...MOCK_SETTINGS
                }
              }
            ])
        )
      })
    })
  })
})
