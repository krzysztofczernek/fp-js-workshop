const numbers = require('./03.json')
const {max, maxFP} = require('./03')

test('maxFP', () => {
  expect(maxFP(numbers)).toEqual(max(numbers))
})