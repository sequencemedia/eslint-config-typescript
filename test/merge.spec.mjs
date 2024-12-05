import {
  expect
} from 'chai'

import {
  parser
} from 'typescript-eslint'

import TYPESCRIPT from '#eslint-config-typescript/config/typescript'

import merge from '#eslint-config-typescript/merge'

describe('#eslint-config-typescript/merge', () => {
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
          parser,
          parserOptions: {
            projectService: true
          }
        }
        const MOCK_LINTER_OPTIONS = {
          reportUnusedDisableDirectives: 'error'
        }
        const MOCK_RULES = { mockOption: 'MOCK RULES' }
        const MOCK_SETTINGS = { mockOption: 'MOCK SETTINGS' }

        const {
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
                files: MOCK_FILES,
                ignores: MOCK_IGNORES,
                languageOptions: {
                  ecmaVersion: 'latest',
                  ...MOCK_LANGUAGE_OPTIONS
                },
                linterOptions: MOCK_LINTER_OPTIONS,
                rules: MOCK_RULES,
                settings: MOCK_SETTINGS
              },
              {
                ...TYPESCRIPT,
                files: MOCK_FILES,
                ignores: MOCK_IGNORES,
                languageOptions: MOCK_LANGUAGE_OPTIONS,
                linterOptions: MOCK_LINTER_OPTIONS,
                rules: {
                  ...TYPESCRIPT_RULES,
                  ...MOCK_RULES
                },
                settings: MOCK_SETTINGS
              }])
        )
      })
    })
  })
})
