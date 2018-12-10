const R = require('ramda')

// Custom Functor
const Identity = value => ({
  map: fn => Identity(fn(value)),
  // Not necessary
  valueOf: () => value
})

module.exports = {
  Identity
}
