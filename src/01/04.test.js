const cars = require('./04.json')
const { fastestCar, fastestCarFP } = require('./04')

test('fastestCarFP', () => {
  expect(fastestCarFP(cars)).toEqual(fastestCar(cars))
})
