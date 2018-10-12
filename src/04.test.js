const people = require('./04.json')
const {isEligibleToVote, isEligibleToVoteFP} = require('./04')

test('isEligibleToVoteFP', () => {
  expect(people.map(isEligibleToVoteFP)).toEqual(people.map(isEligibleToVote))
})