const {max, maxFP} = require('./02')

const numbers = [1, 3, 5, 2, -1, -10, 100, 7]

test('maxFP', () => {
  expect(maxFP(numbers)).toEqual(max(numbers))
})