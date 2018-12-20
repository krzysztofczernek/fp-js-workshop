const {
  processStrings,
  processStringsPointfree,
  processStringsQuick,
  processStringsQuickPointfree,
  processStringsOur
} = require('./01')

const STRINGS_TO_PROCESS = ['Alabama', '    aRiZoNa baby! ']
const EXPECTED_RESULT = ['ZLZBZMZ', 'ZRIZONZ BZBY!']

test('processStrings', () => {
  expect(processStrings(STRINGS_TO_PROCESS)).toEqual(EXPECTED_RESULT)
})

test('processStringsPointfree', () => {
  expect(processStringsPointfree(STRINGS_TO_PROCESS)).toEqual(EXPECTED_RESULT)
})

test('processStringsQuick', () => {
  expect(processStringsQuick(STRINGS_TO_PROCESS)).toEqual(EXPECTED_RESULT)
})

test('processStringsQuickPointfree', () => {
  expect(processStringsQuickPointfree(STRINGS_TO_PROCESS)).toEqual(EXPECTED_RESULT)
})

test('processStringsOur', () => {
  expect(processStringsOur(STRINGS_TO_PROCESS)).toEqual(EXPECTED_RESULT)
})
