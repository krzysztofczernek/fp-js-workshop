const numbers = require('./02.json')
const {max, maxFP} = require('./02')

test('maxFP', () => {
  expect(maxFP(numbers)).toEqual(max(numbers))
})