// Example from https://github.com/loop-recur/FPJS-Class/blob/master/part1_exercises/exercises/compose/compose_exercises.js

const R = require('ramda')

// Exercise 3
// Refactor fastestCar into fastestCarFP to point-free
const fastestCar = cars => {
  const sorted = R.sortBy(car => car.horsepower, cars)
  const fastest = R.last(sorted)
  return fastest.name
}

// const fastestCarFP = () => undefined
const fastestCarFP = R.compose(R.prop('name'), R.last, R.sortBy(R.prop('horsepower')))

module.exports = {
  fastestCar,
  fastestCarFP
}