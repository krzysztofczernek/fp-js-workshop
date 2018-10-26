const people = require('./02.json')
const { getFirstNames, getFirstNamesFP } = require('./02')

test('getFirstNamesFP', () => {
  expect(getFirstNamesFP(people)).toEqual(getFirstNames(people))
})
