import {
  expect
} from 'chai'

import {
  recommended,
  typescript,
  stylistic
} from '@sequencemedia/eslint-config-typescript/configs'

describe('@sequencemedia/eslint-config-typescript/configs', () => {
  describe('`recommended`', () => it('is an object', () => expect(recommended).to.be.an('object')))

  describe('`typescript`', () => it('is an object', () => expect(typescript).to.be.an('object')))

  describe('`stylistic`', () => it('is an object', () => expect(stylistic).to.be.an('object')))
})
