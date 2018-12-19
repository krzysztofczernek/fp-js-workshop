const { Maybe } = require('./typeclasses')
const { getUserNationalitySafe, getFirstUserNationality } = require('./05')

describe('Exercise #1', () => {
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

describe('Exercise #2', () => {
  test('getFirstUserNationality', () => {
    return expect(getFirstUserNationality().promise()).resolves.toEqual('US')
  })
})
