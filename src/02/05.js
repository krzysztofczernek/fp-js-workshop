// Exercises & inspirations:
// https://drboolean.gitbooks.io/mostly-adequate-guide-old/
// https://jrsinclair.com/articles/2016/marvellously-mysterious-javascript-maybe-monad/

const R = require('ramda')
const Future = require('fluture');
const { Maybe } = require('./typeclasses')

// Exercise #1
// Implement a function that for a given user safely returns their nationality, using the safeProp utility

// Data format:
// const exampleUser = {
//   email: 'john@doe.com',
//   accountDetails: {
//     nationality: 'US'
//   }
// }

const safeProp = propName => object => Maybe.of(object[propName])

const getUserNationalitySafe = user =>
  Maybe.of(user)
    .chain(safeProp('accountDetails'))
    .chain(safeProp('nationality'))

// Exercise #2
// Implement a function that returns nationality for the first user in the database

// Data format:
// const exampleUsers = [
//   {id: '1', name: 'John'}
// ]
// const exampleUser = {
//   email: 'john@doe.com',
//   nationality: 'US'
// }

const getAllUsers = () =>
  Future.of([{ id: '1', name: 'John' }, { id: '2', name: 'Jane' }, { id: '3', name: 'Johnnie' }])

const getUserProfile = id =>
  Future.of(
    {
      '1': {
        name: 'John',
        nationality: 'US'
      },
      '2': {
        name: 'Jane',
        nationality: 'PL'
      },
      '3': {
        name: 'Johnnie',
        nationality: 'DE'
      }
    }[id]
  )

const getFirstUserNationality = () =>
  getAllUsers()
    .map(R.head)
    .map(R.prop('id'))
    .chain(getUserProfile)
    .map(R.prop('nationality'))

module.exports = {
  getUserNationalitySafe,
  getFirstUserNationality
}
