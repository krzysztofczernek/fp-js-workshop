const {
  processStrings,
  processStringsFP,
  processStringsQuick,
  processStringsQuickFP,
  processStringsOur
} = require('./01')

const STRINGS_TO_PROCESS = ['Alabama', '    aRiZoNa baby! ']
const EXPECTED_RESULT = ['ZLZBZMZ', 'ZRIZONZ BZBY!']

test('processStrings', () => {
  expect(processStrings(STRINGS_TO_PROCESS)).toEqual(EXPECTED_RESULT)
})

test('processStringsFP', () => {
  expect(processStringsFP(STRINGS_TO_PROCESS)).toEqual(EXPECTED_RESULT)
})

test('processStringsQuick', () => {
  expect(processStringsQuick(STRINGS_TO_PROCESS)).toEqual(EXPECTED_RESULT)
})

test('processStringsQuickFP', () => {
  expect(processStringsQuickFP(STRINGS_TO_PROCESS)).toEqual(EXPECTED_RESULT)
})

test('processStringsOur', () => {
  expect(processStringsOur(STRINGS_TO_PROCESS)).toEqual(EXPECTED_RESULT)
})
