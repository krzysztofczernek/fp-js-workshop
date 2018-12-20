const { Maybe, Identity, Left, Right } = require('./typeclasses')
const { increment, getUserNationalitySafe, greetActiveUser } = require('./03')

describe('Exercise #1', () => {
  test('increment', () => {
    expect(increment(Maybe.of(1)).getInternalValue()).toEqual(2)
    expect(increment(Identity.of(1)).getInternalValue()).toEqual(2)
  })
})

describe('Exercise #2', () => {
  test('getUserNationalitySafe', () => {
    const johnDoe = {
      email: 'john@doe.com',
      accountDetails: {
        nationality: 'US'
      }
    }
    const viktorNavorski = {
      email: 'viktor@navorski.com',
      accountDetails: {}
    }
    const unregisteredUser = {
      email: 'test@example.com'
    }
    const noUser = null

    expect(getUserNationalitySafe(johnDoe).getInternalValue()).toEqual(johnDoe.accountDetails.nationality)
    expect(getUserNationalitySafe(viktorNavorski).getInternalValue()).toEqual(Maybe.Nothing)
    expect(getUserNationalitySafe(unregisteredUser).getInternalValue()).toEqual(Maybe.Nothing)
    expect(getUserNationalitySafe(noUser).getInternalValue()).toEqual(Maybe.Nothing)
  })
})

describe('Exercise #3', () => {
  test('greetActiveUser', () => {
    const activeUser = {
      name: 'John',
      active: true
    }
    const inactiveUser = {
      name: 'Jane',
      active: false
    }

    expect(greetActiveUser(activeUser).getInternalValue()).toEqual('Welcome, John!')
    expect(greetActiveUser(inactiveUser).getInternalValue()).toEqual('Your account is not active')
  })
})
