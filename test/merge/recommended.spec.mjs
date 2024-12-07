import {
  expect
} from 'chai'

import RECOMMENDED from '@sequencemedia/eslint-config-typescript/configs/recommended'

import merge from '@sequencemedia/eslint-config-typescript/merge/recommended'

describe('@sequencemedia/eslint-config-typescript/merge/recommended', () => {
  describe('`merge`', () => it('is a function', () => expect(merge).to.be.a('function')))

  describe('`merge()`', () => {
    describe('Always', () => it('returns an object', () => expect(merge()).to.be.an('object')))

    describe('Merges', () => {
      it('returns an object', () => {
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
          mockOptions: 'MOCK LINTER OPTIONS'
        }
        const MOCK_RULES = {
          mockOption: 'MOCK RULES'
        }
        const MOCK_SETTINGS = {
          mockOption: 'MOCK SETTINGS'
        }

        const {
          languageOptions: RECOMMENDED_LANGUAGE_OPTIONS,
          linterOptions: RECOMMENDED_LINTER_OPTIONS,
          rules: RECOMMENDED_RULES
        } = RECOMMENDED

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
            .to.eql({
              ...RECOMMENDED,
              files: MOCK_FILES,
              ignores: MOCK_IGNORES,
              languageOptions: {
                ...RECOMMENDED_LANGUAGE_OPTIONS,
                ...MOCK_LANGUAGE_OPTIONS
              },
              linterOptions: {
                ...RECOMMENDED_LINTER_OPTIONS,
                ...MOCK_LINTER_OPTIONS
              },
              rules: {
                ...RECOMMENDED_RULES,
                ...MOCK_RULES
              },
              settings: MOCK_SETTINGS
            })
        )
      })
    })
  })
})
