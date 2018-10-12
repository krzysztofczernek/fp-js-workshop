const cars = require('./03.json')
const {fastestCar, fastestCarFP} = require('./03')

test('fastestCarFP', () => {
  expect(fastestCarFP(cars)).toEqual(fastestCar(cars))
})