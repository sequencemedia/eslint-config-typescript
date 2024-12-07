import {
  expect
} from 'chai'

import {
  recommended,
  typescript
} from '@sequencemedia/eslint-config-typescript/configs'

describe('@sequencemedia/eslint-config-typescript/configs', () => {
  describe('`recommended`', () => it('is an object', () => expect(recommended).to.be.an('object')))

  describe('`typescript`', () => it('is an object', () => expect(typescript).to.be.an('object')))
})
