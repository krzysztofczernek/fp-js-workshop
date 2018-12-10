const { Identity } = require('./03')

const double = x => x * 2
const length = x => x.length

describe('Identity', () => {
  test('constructor', () => {
    expect(Identity(3).valueOf()).toEqual(3)
  })

  describe('map', () => {
    test('for numbers', () => {
      expect(
        Identity(3)
          .map(double)
          .valueOf()
      ).toEqual(6)
    })

    test('for strings', () => {
      expect(
        Identity('test')
          .map(length)
          .valueOf()
      ).toEqual(4)
    })
  })
})
