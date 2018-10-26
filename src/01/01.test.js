const { splitOnSpace, splitOnSpaceFP } = require('./01')

const name = 'Krzysztof Piotr Czernek'

test('splitOnSpaceFP', () => {
  expect(splitOnSpaceFP(name)).toEqual(splitOnSpace(name))
})
