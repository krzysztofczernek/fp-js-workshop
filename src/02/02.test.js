const {
  processNumbers,
  processNumbersPointfree,
  processNumbersQuickPointfree,
  processNumbersQuickOur
} = require('./02')

const NUMBERS_TO_PROCESS = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const EXPECTED_RESULT = [14, 18]

test('processNumbers', () => {
  expect(processNumbers(NUMBERS_TO_PROCESS)).toEqual(EXPECTED_RESULT)
})

test('processNumbersPointfree', () => {
  expect(processNumbersPointfree(NUMBERS_TO_PROCESS)).toEqual(EXPECTED_RESULT)
})

test('processNumbersQuickPointfree', () => {
  expect(processNumbersQuickPointfree(NUMBERS_TO_PROCESS)).toEqual(EXPECTED_RESULT)
})

test('processNumbersQuickOur', () => {
  expect(processNumbersQuickOur(NUMBERS_TO_PROCESS)).toEqual(EXPECTED_RESULT)
})
