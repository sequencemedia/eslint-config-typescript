import {
  expect
} from 'chai'

import {
  parser
} from 'typescript-eslint'

import TYPESCRIPT from '@sequencemedia/eslint-config-typescript/configs/typescript'

import merge from '@sequencemedia/eslint-config-typescript/merge'

describe('@sequencemedia/eslint-config-typescript/merge', () => {
  describe('`merge`', () => it('is a function', () => expect(merge).to.be.a('function')))

  describe('`merge()`', () => {
    describe('Always', () => it('returns an array', () => expect(merge()).to.be.an('array')))

    describe('Merges', () => {
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
        const MOCK_RULES = {
          mockOption: 'MOCK RULES'
        }
        const MOCK_SETTINGS = {
          mockOption: 'MOCK SETTINGS'
        }

        const {
          languageOptions: TYPESCRIPT_LANGUAGE_OPTIONS,
          linterOptions: TYPESCRIPT_LINTER_OPTIONS,
          rules: TYPESCRIPT_RULES
        } = TYPESCRIPT

        return (
          expect(
            merge({
              files: MOCK_FILES,
              ignores: MOCK_IGNORES,
              languageOptions: MOCK_LANGUAGE_OPTIONS,
              linterOptions: MOCK_LINTER_OPTIONS,
              rules: MOCK_RULES,
              settings: MOCK_SETTINGS
            })
          )
            .to.eql([
              {
                name: '@sequencemedia/eslint-config-typescript',
                languageOptions: {
                  parser,
                  parserOptions: {
                    projectService: true,
                    project: 'tsconfig.json'
                  }
                },
                linterOptions: {
                  reportUnusedDisableDirectives: 'error'
                },
                files: [
                  '**/*.{ts,mts,cts}'
                ]
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
                rules: {
                  ...TYPESCRIPT_RULES,
                  ...MOCK_RULES
                },
                settings: MOCK_SETTINGS
              }
            ])
        )
      })
    })
  })
})
