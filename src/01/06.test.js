const {selectedNames} = require('./06')

const users = {
  12: {
    name: 'Krzysztof'
  },
  23: {
    name: 'John'
  },
  34: {
    name: 'Jane'
  },
  56: {
    name: 'Bob'
  }
}
const selectedUserIds = ['12', '23', '34']

test('selectedNames', () => {
  expect(selectedNames(users)(selectedUserIds)).toEqual([
    'Krzysztof',
    'John',
    'Jane'
  ])
})