import {
  expect
} from 'chai'

import {
  isString,
  isObject
} from '#eslint-config-typescript/common'

describe('#eslint-config-typescript/common', () => {
  describe('`isString`', () => it('is a function', () => expect(isString).to.be.a('function')))

  describe('`isObject`', () => it('is a function', () => expect(isObject).to.be.a('function')))

  describe('`isString()`', () => {
    describe('argument is a string', () => it('returns true', () => expect(isString('')).to.true))
    describe('argument is a number', () => it('returns false', () => expect(isString(1)).to.be.false))
    describe('argument is null', () => it('returns false', () => expect(isString(null)).to.be.false))
    describe('argument is undefined', () => it('returns false', () => expect(isString()).to.be.false))
    describe('argument is a boolean', () => it('returns false', () => expect(isString(true)).to.be.false))
    describe('argument is an object', () => it('returns false', () => expect(isString({})).to.be.false))
    describe('argument is an array', () => it('returns false', () => expect(isString([])).to.be.false))
  })

  describe('`isObject()`', () => {
    describe('argument is a string', () => it('returns false', () => expect(isObject('')).to.false))
    describe('argument is a number', () => it('returns false', () => expect(isObject(1)).to.be.false))
    describe('argument is null', () => it('returns false', () => expect(isObject(null)).to.be.false))
    describe('argument is undefined', () => it('returns false', () => expect(isObject()).to.be.false))
    describe('argument is a boolean', () => it('returns false', () => expect(isObject(true)).to.be.false))
    describe('argument is an object', () => it('returns true', () => expect(isObject({})).to.be.true))
    describe('argument is an array', () => it('returns false', () => expect(isObject([])).to.be.false))
  })
})
