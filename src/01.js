const R = require('ramda')

// Exercise 1
// Refactor getFirstNames into getFirstNamesFP that uses getProp and getListProp
const getFirstNames = people => people.map(person => person.firstName)

// const getProp = undefined
// const getListProp = undefined
// const getFirstNamesFP = () => undefined

// const getProp = (object, prop) => object[prop]
// const getListProp = (list, prop) => list.map(object => getProp(object, prop))
// const getFirstNamesFP = list => getListProp(list, 'firstName')

// const getProp = prop => object => object[prop]
// const getListProp = prop => R.map(getProp(prop))
// const getFirstNamesFP = getListProp('firstName')

const getListProp = R.compose(R.map, R.prop)
const getFirstNamesFP = getListProp('firstName')

module.exports = {
  getFirstNames,
  getFirstNamesFP
}