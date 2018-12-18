const R = require('ramda')

const isOdd = number => {
  // console.log('isOdd', number)
  return number % 2 === 1
}
const multiplyByTwo = number => {
  // console.log('multiplyByTwo', number)
  return R.multiply(2)(number)
}
const isBiggerThanTen = number => {
  // console.log('isBiggerThan10', number)
  return R.gt(R.__, 10)(number)
}

// Reference implementation
const processNumbers = numbers => {
  return numbers
    .filter(isOdd)
    .map(multiplyByTwo)
    .filter(isBiggerThanTen)
}

// Exercise #1
// Implement a processNumbers version that is point-free
const processNumbersPointfree = R.pipe(
  R.filter(isOdd),
  R.map(multiplyByTwo),
  R.filter(isBiggerThanTen)
)

// Exercise #2
// Implement a processNumbers version that is point-free and only goes through the list once
const processNumbersQuickPointfree = R.into(
  [],
  R.compose(
    R.filter(isOdd),
    R.map(multiplyByTwo),
    R.filter(isBiggerThanTen)
  )
)

// const concat = (acc, curr) => [...acc, curr]
// const processNumbersQuickPointfree = R.transduce(
//   R.compose(
//     R.filter(isOdd),
//     R.map(multiplyByTwo),
//     R.filter(isBiggerThanTen)
//   ),
//   concat,
//   []
// )

// Exercise #3
// Implement a processNumbers version that is point-free, only goes through the list once, and doesn't use Ramda
const pipeOur = (...fns) => arg => fns.reduce((mem, curr) => curr(mem), arg)
const filter = predicate => step => (acc, curr) => (predicate(curr) ? step(acc, curr) : acc)
const map = mapper => step => (acc, curr) => step(acc, mapper(curr))
const concat = (acc, curr) => [...acc, curr]

const transduce = pipeOur(filter(isBiggerThanTen), map(multiplyByTwo), filter(isOdd))(concat)

const processNumbersQuickOur = numbers => numbers.reduce(transduce, [])

module.exports = { processNumbers, processNumbersPointfree, processNumbersQuickPointfree, processNumbersQuickOur }
