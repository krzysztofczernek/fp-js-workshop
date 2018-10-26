const { removeQs, factorial, memoizedFactorial, memoizedFactorial2, uncurry } = require('./homework')

test('removeQs', () => {
  expect(removeQs('abcqdqefgqhiqj')).toEqual('abcdefghij')
})

test('factorial', () => {
  expect(factorial(5)).toEqual(120)
  expect(factorial(5)).toEqual(120)
})

test('memoizedFactorial', () => {
  expect(memoizedFactorial(5)).toEqual(120)
  expect(memoizedFactorial(5)).toEqual(120)
})

test('memoizedFactorial2', () => {
  expect(memoizedFactorial2(5)).toEqual(120)
  expect(memoizedFactorial2(5)).toEqual(120)
})

test('uncurry', () => {
  const foo = x => y => z => x + y + z
  const uncurriedFoo = uncurry(3, foo)

  expect(uncurriedFoo(1, 2, 3)).toEqual(6)
})
