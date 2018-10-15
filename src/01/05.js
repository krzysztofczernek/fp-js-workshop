const R = require('ramda')

const OUR_COUNTRY_NAME = 'Poland'

const wasBornInCountry = person => person.birthCountry === OUR_COUNTRY_NAME
const wasNaturalized = person => Boolean(person.naturalizationDate)
const isOver18 = person => person.age >= 18

const isCitizen = person => wasBornInCountry(person) || wasNaturalized(person)

const isEligibleToVote = person => isOver18(person) && isCitizen(person)

// Exercise 05
// Create an equivalent point-free version

const wasBornInCountryFP = R.compose(R.equals(OUR_COUNTRY_NAME), R.prop('birthCountry'))
const wasNaturalizedFP = R.compose(Boolean, R.prop('naturalizationDate'))
const isOver18FP = R.compose(R.gte(R.__, 18), R.prop('age'))
const isEligibleToVoteFP = R.both(isOver18FP, R.either(wasBornInCountryFP, wasNaturalizedFP))

module.exports = {
  isEligibleToVote,
  isEligibleToVoteFP
}