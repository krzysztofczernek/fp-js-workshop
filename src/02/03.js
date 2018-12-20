// Exercises & inspirations:
// https://drboolean.gitbooks.io/mostly-adequate-guide-old/
// https://jrsinclair.com/articles/2016/marvellously-mysterious-javascript-maybe-monad/

const R = require('ramda')
const { Maybe, Right, Left } = require('./typeclasses')

// Exercise #1
// Implement a function that increments a value inside a functor, using R.map and R.add

const increment = functor => R.map(R.add(1))(functor)

// Exercise #2
// Implement a function that for a given user safely returns their nationality, without using conditional operators

// Data format:
// const exampleUser = {
//   email: 'john@doe.com',
//   accountDetails: {
//     nationality: 'US'
//   }
// }

const getUserNationalitySafe = user =>
  Maybe.of(user)
    .map(R.prop('accountDetails'))
    .map(R.prop('nationality'))

// Exercise #3
// Implement a function that greets a user if they are active, and returns an error otherwise.
// Use greetingMessage and checkActive. Don't use conditional operators

// Data format:
// const exampleUser = {
//   name: 'John',
//   active: true
// }

const greetingMessage = R.pipe(
  R.prop('name'),
  text => `Welcome, ${text}!`
)
const checkActive = user => (user.active ? Right.of(user) : Left.of('Your account is not active'))

const greetActiveUser = R.pipe(
  checkActive,
  R.map(greetingMessage)
)

module.exports = {
  increment,
  getUserNationalitySafe,
  greetActiveUser
}
