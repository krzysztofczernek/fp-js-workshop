const people = require('./05.json')
const { isEligibleToVote, isEligibleToVoteFP } = require('./05')

test('isEligibleToVoteFP', () => {
  expect(people.map(isEligibleToVoteFP)).toEqual(people.map(isEligibleToVote))
})
