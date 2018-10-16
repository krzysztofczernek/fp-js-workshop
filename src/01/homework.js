const R = require('ramda')

// Homework 01
// Source: https://mostly-adequate.gitbooks.io/mostly-adequate-guide/ch04.html#exercises
// Refactor removeQs to remove all explicit references to arguments
// Hint: use Ramda
const removeQs = xs => R.filter(x => !x.match(/q/i))(xs).join('')

// Homework 02
// Implement memoizedFactorial - a recursive, but memoized version of factorial, that remembers previous results and reuses them
// Hint: IIFE
function factorial (x) {
  // console.log(`computing factorial of ${x}`) // TODO uncomment to test memoization
  return x > 1 ? x * factorial(x - 1) : 1
}

const memoizedFactorial = () => undefined

// Homework 03
// Implement a memoized helper that turns a given function into a memoized version

const memoized = (fn) => () => undefined

const memoizedFactorial2 = memoized(factorial)

// Homework 04
// Implement uncurry for a fixed-arity function. It should behave like Ramda's uncurryN: https://ramdajs.com/docs/#uncurryN

const uncurry = (arity, fn) => () => undefined

module.exports = {
  removeQs,
  factorial,
  memoizedFactorial,
  memoizedFactorial2,
  uncurry
}