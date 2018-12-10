// Example from https://jrsinclair.com/articles/2016/marvellously-mysterious-javascript-maybe-monad/

const R = require('ramda')

const banners = {
  AB: '/assets/banners/alberta.jpg',
  BC: '/assets/banners/british-columbia.jpg',
  MB: '/assets/banners/manitoba.jpg',
  NL: '/assets/banners/newfoundland-labrador.jpg',
  NS: '/assets/banners/nova-scotia.jpg',
  NT: '/assets/banners/northwest-territories.jpg',
  ON: '/assets/banners/ontario.jpg',
  PE: '/assets/banners/prince-edward.jpg',
  QC: '/assets/banners/quebec.jpg',
  SK: '/assets/banners/saskatchewan.jpg',
  YT: '/assets/banners/yukon.jpg'
}

const correctUser = {
  email: 'james@example.com',
  accountDetails: {
    address: {
      street: '123 Fake St',
      city: 'Exampleville',
      state: 'NS',
      zip: '1234'
    }
  },
  preferences: {}
}

const emptyUser = {}

const invalidUser = {
  email: 'john@doe.com'
}

// Exercise
// const getUserBanner = (banners, user) => banners[user.accountDetails.address.state]
// getUserBanner(correctUser)

// function getUserBanner(banners, user) {
//   if (user && user.accountDetails && user.accountDetails.address) {
//     return banners[user.accountDetails.address.state]
//   }
// }

const Maybe = val => {
  const value = {
    isNothing: () => val === null || val === undefined,
    map: fn => (value.isNothing() ? value : Maybe(fn(val))),
    toString: () => (value.isNothing() ? 'Nothing!' : val),
    join: () => val,
    chain: fn => (value.isNothing() ? value : value.map(fn).join()),
    orElse: fallback => (value.isNothing() ? Maybe(fallback) : value),
    ap: otherMaybeFn => otherMaybeFn.map(val)
  }
  return value
}

const getProvinceBannerSafe = province => Maybe(banners[province])

// console.log(Maybe(null).toString())
// console.log(Maybe(1).toString())
// console.log(
//   Maybe(1)
//     .map(x => x + 1)
//     .toString()
// )

// console.log(
//   Maybe(correctUser)
//     .map(R.prop('accountDetails'))
//     .map(R.prop('address'))
//     .map(R.prop('state'))
//     .map(getProvinceBannerSafe)
//     .toString()
// )

// console.log(
//   Maybe(correctUser)
//     .map(R.prop('accountDetails'))
//     .map(R.prop('address'))
//     .map(R.prop('state'))
//     .chain(getProvinceBannerSafe)
//     .orElse('/assets/banners/default.jpg')
//     .toString()
// )

const getUserBannerUrl = user =>
  Maybe(user)
    .map(R.prop('accountDetails'))
    .map(R.prop('address'))
    .map(R.prop('state'))
    .chain(getProvinceBannerSafe)
    .orElse('/assets/banners/default.jpg')

const setBannerBackground = bannerId => backgroundUrl => {
  console.log(`setting up ${bannerId} background to ${backgroundUrl}`)
  return bannerId
}

const getBannerId = id => Maybe(id)

// console.log(getUserBannerUrl(correctUser).map(setBannerBackground).toString());

console.log(
  getUserBannerUrl(correctUser)
    .map(setBannerBackground)
    .ap(getBannerId('1'))
    .toString()
)
