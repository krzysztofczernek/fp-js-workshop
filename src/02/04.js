// Exercises & inspirations:
// https://drboolean.gitbooks.io/mostly-adequate-guide-old/
// https://jrsinclair.com/articles/2016/marvellously-mysterious-javascript-maybe-monad/

const R = require('ramda')
const { Maybe } = require('./typeclasses')

// Exercise #1
// Implement a function that adds two numbers that are possibly null

const addSafe = (x, y) =>
  Maybe.of(R.add)
    .ap(Maybe.of(x))
    .ap(Maybe.of(y))

// Exercise #2
// Rewrite addSafe to use lift

const addSafeLifted = (x, y) => R.lift(R.add)(Maybe.of(x), Maybe.of(y))

// Exercise #3
// Implement function that calls activate on a user, passing activatedUsers to it

// Data format:
// const exampleUser = {
//   id: 1,
//   name: 'John',
//   activate: (activatedUsers) => { activatedUsers[1] = true }
// }

const validateUser = (user, activatedUsers) =>
  Maybe.of(user)
    .map(R.prop('activate'))
    .ap(Maybe.of(activatedUsers))

module.exports = {
  addSafe,
  addSafeLifted,
  validateUser
}
