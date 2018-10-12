const R = require('ramda')

// Exercise 1
// Refactor getFirstNames into getFirstNamesFP that uses getProp and getListProp
const getFirstNames = people => people.map(person => person.firstName)

const getListProp = R.compose(R.map, R.prop)
const getFirstNamesFP = getListProp('firstName')

module.exports = {
  getFirstNames,
  getFirstNamesFP
}