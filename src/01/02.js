const R = require('ramda')

// Exercise 02
// Refactor getFirstNames into getFirstNamesFP that uses R.map and R.prop
const getFirstNames = people => people.map(person => person.firstName)

const getListProp = R.compose(
  R.map,
  R.prop
)
const getFirstNamesFP = getListProp('firstName')

module.exports = {
  getFirstNames,
  getFirstNamesFP
}
