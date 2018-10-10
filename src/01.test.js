const people = require('./01.json')
const {getFirstNames, getFirstNamesFP} = require('./01')

test('getFirstNamesFP', () => {
  expect(getFirstNamesFP(people)).toEqual(getFirstNames(people))
})