const R = require('ramda')

const keepHighest = (x, y) => x >= y ? x : y

// Exercise 2
// Refactor max into maxFP and avoid explicit references to numbers, acc, and x
const max = numbers =>
  R.reduce((acc, x) => keepHighest(acc, x), 0, numbers)

const maxFP = R.reduce(keepHighest, 0)

module.exports = {
  max,
  maxFP
}