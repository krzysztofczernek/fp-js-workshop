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

const processNumbers = numbers => {
  return numbers
    .filter(isOdd)
    .map(multiplyByTwo)
    .filter(isBiggerThanTen)
}

const processNumbersFP = R.pipe(
  R.filter(isOdd),
  R.map(multiplyByTwo),
  R.filter(isBiggerThanTen)
)

const processNumbersQuickFP = R.into(
  [],
  R.compose(
    R.filter(isOdd),
    R.map(multiplyByTwo),
    R.filter(isBiggerThanTen)
  )
)

// const concat = (acc, curr) => [...acc, curr]
// const processNumbersQuickFP = R.transduce(
//   R.compose(
//     R.filter(isOdd),
//     R.map(multiplyByTwo),
//     R.filter(isBiggerThanTen)
//   ),
//   concat,
//   []
// )

const pipeOur = (...fns) => arg => fns.reduce((mem, curr) => curr(mem), arg)
const filter = predicate => step => (acc, curr) => (predicate(curr) ? step(acc, curr) : acc)
const map = mapper => step => (acc, curr) => step(acc, mapper(curr))
const concat = (acc, curr) => [...acc, curr]

const transduce = pipeOur(filter(isBiggerThanTen), map(multiplyByTwo), filter(isOdd))(concat)

const processNumbersQuickOur = numbers => numbers.reduce(transduce, [])

module.exports = { processNumbers, processNumbersFP, processNumbersQuickFP, processNumbersQuickOur }
