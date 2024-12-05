import {
  expect
} from 'chai'

import {
  getLanguageOptions,
  getLinterOptions,
  getRules,
  getSettings,
  mergeLanguageOptions,
  mergeLinterOptions,
  mergeRules,
  mergeSettings
} from '#eslint-config-typescript/common/merge'

describe('#eslint-config-typescript/common/merge', () => {
  const MOCK_LANGUAGE_OPTIONS = {}
  const MOCK_LINTER_OPTIONS = {}
  const MOCK_RULES = {}
  const MOCK_SETTINGS = {}

  describe('`getLanguageOptions`', () => {
    it('is a function', () => expect(getLanguageOptions).to.be.a('function'))
  })

  describe('`getLinterOptions`', () => {
    it('is a function', () => expect(getLinterOptions).to.be.a('function'))
  })

  describe('`getRules`', () => {
    it('is a function', () => expect(getRules).to.be.a('function'))
  })

  describe('`getSettings`', () => {
    it('is a function', () => expect(getSettings).to.be.a('function'))
  })

  describe('`mergeLanguageOptions`', () => {
    it('is a function', () => expect(mergeLanguageOptions).to.be.a('function'))
  })

  describe('`mergeLinterOptions`', () => {
    it('is a function', () => expect(mergeLinterOptions).to.be.a('function'))
  })

  describe('`mergeRules`', () => {
    it('is a function', () => expect(mergeRules).to.be.a('function'))
  })

  describe('`mergeSettings`', () => {
    it('is a function', () => expect(mergeSettings).to.be.a('function'))
  })

  describe('`getLanguageOptions()`', () => {
    it('returns an object', () => (
      expect(getLanguageOptions({ languageOptions: MOCK_LANGUAGE_OPTIONS }))
        .to.eql(MOCK_LANGUAGE_OPTIONS) // not identical
    ))
  })

  describe('`getLinterOptions()`', () => {
    it('returns an object', () => (
      expect(getLinterOptions({ linterOptions: MOCK_LINTER_OPTIONS }))
        .to.equal(MOCK_LINTER_OPTIONS)
    ))
  })

  describe('`getRules()`', () => {
    it('returns an object', () => (
      expect(getRules({ rules: MOCK_RULES }))
        .to.equal(MOCK_RULES)
    ))
  })

  describe('`getSettings()`', () => {
    it('returns an object', () => (
      expect(getSettings({ settings: MOCK_SETTINGS }))
        .to.equal(MOCK_SETTINGS)
    ))
  })

  describe('`mergeLanguageOptions()`', () => {
    it('returns an object', () => (
      expect(mergeLanguageOptions({ languageOptions: { mockOption: 'alpha' } }, { languageOptions: { mockOption: 'omega' } }))
        .to.eql({ mockOption: 'omega' })
    ))
  })

  describe('`mergeLinterOptions()`', () => {
    it('returns an object', () => (
      expect(mergeLinterOptions({ linterOptions: { mockOption: 'alpha' } }, { linterOptions: { mockOption: 'omega' } }))
        .to.eql({ mockOption: 'omega' })
    ))
  })

  describe('`mergeRules()`', () => {
    it('returns an object', () => (
      expect(mergeRules({ rules: { mockOption: 'alpha' } }, { rules: { mockOption: 'omega' } }))
        .to.eql({ mockOption: 'omega' })
    ))
  })

  describe('`mergeSettings()`', () => {
    it('returns an object', () => (
      expect(mergeSettings({ settings: { mockOption: 'alpha' } }, { settings: { mockOption: 'omega' } }))
        .to.eql({ mockOption: 'omega' })
    ))
  })
})
