const R = require('ramda')

// Exercise 06
// refactor selectedNames, make it point-free

// // 1st attempt
// const selectedNames = users => selectedUserIds => {
//   return selectedUserIds
//     .map(userIdString => parseInt(userIdString))
//     .map(userId => users[userId])
//     .map(user => user.name)
// }

// // Point-free!
// const selectedNames = users => selectedUserIds => {
//   return selectedUserIds
//     .map(parseInt)
//     .map(userId => users[userId])
//     .map(user => user.name)
// }

// Ooops!

// Ramda to the rescue!
// const selectedNames = users => selectedUserIds => {
//   return R.pipe(
//     R.map(userIdString => parseInt(userIdString)),
//     R.map(userId => users[userId]),
//     R.map(user => user.name)
//   )(selectedUserIds)
// }

// // Point-free!
// const selectedNames = users =>
//   R.pipe(
//     R.map(parseInt),
//     R.map(R.flip(R.prop)(users)),
//     R.map(R.prop('name'))
//   )

// Compose!
const selectedNames = users =>
  R.pipe(
    R.map(
      R.pipe(
        parseInt,
        R.flip(R.prop)(users),
        R.prop('name'),
      )
    )
  )

module.exports = {
  selectedNames
}