const { Maybe } = require('./typeclasses')
const { addSafe, addSafeLifted, validateUser } = require('./04')

describe('Exercise #1', () => {
  test('addSafe', () => {
    expect(addSafe(null, null).getInternalValue()).toEqual(Maybe.Nothing)
    expect(addSafe(1, null).getInternalValue()).toEqual(Maybe.Nothing)
    expect(addSafe(null, 1).getInternalValue()).toEqual(Maybe.Nothing)
    expect(addSafe(1, 1).getInternalValue()).toEqual(2)
  })
})

describe('Exercise #2', () => {
  test('addSafeLifted', () => {
    expect(addSafeLifted(null, null).getInternalValue()).toEqual(Maybe.Nothing)
    expect(addSafeLifted(1, null).getInternalValue()).toEqual(Maybe.Nothing)
    expect(addSafeLifted(null, 1).getInternalValue()).toEqual(Maybe.Nothing)
    expect(addSafeLifted(1, 1).getInternalValue()).toEqual(2)
  })
})

describe('Exercise #3', () => {
  test('validateUser', () => {
    const activatedUsers = {}
    const validUser = {
      id: 1,
      name: 'John',
      activate: activatedUsers => {
        activatedUsers[1] = true
      }
    }
    const invalidUser = {
      id: 2,
      name: 'Jane'
    }
    const noUser = null

    validateUser(validUser, activatedUsers)
    validateUser(invalidUser, activatedUsers)
    validateUser(noUser, activatedUsers)

    // Test if these don't fail
    validateUser(validUser, null)
    validateUser(invalidUser, null)
    validateUser(noUser, null)

    expect(activatedUsers[1]).toEqual(true)
    expect(activatedUsers[2]).toEqual(undefined)
  })
})
