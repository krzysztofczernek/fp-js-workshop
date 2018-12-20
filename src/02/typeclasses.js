const R = require('ramda')

// Static versions

const map = R.curry(function(f, functor) {
  return functor.map(f)
})

const join = function(monad) {
  return monad.join()
}

const chain = R.curry(function(f, monad) {
  return R.compose(
    join,
    map(f)
  )(monad)
})

// Helpers

const trace = function(x) {
  return x && x.trace ? x.trace() : x
}

// Inspirations:
// https://drboolean.gitbooks.io/mostly-adequate-guide-old/

// Maybe

const Maybe = function(x) {
  this.__value = x
}

Maybe.Nothing = Symbol('Maybe.Nothing')

Maybe.of = function(x) {
  return new Maybe(x)
}

Maybe.prototype.isNothing = function() {
  return this.__value === null || this.__value === undefined
}

Maybe.prototype.map = function(f) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value))
}

Maybe.prototype.ap = function(otherMaybe) {
  return this.isNothing() ? Maybe.of(null) : otherMaybe.map(this.__value)
}

Maybe.prototype.join = function() {
  return this.isNothing() ? Maybe.of(null) : this.__value
}

Maybe.prototype.chain = function(f) {
  return chain(f, this)
}

Maybe.prototype.getInternalValue = function() {
  return this.__value || Maybe.Nothing
}

Maybe.prototype.trace = function() {
  return `Maybe(${trace(this.__value)})`
}

// Identity

const Identity = function(x) {
  this.__value = x
}

Identity.of = function(x) {
  return new Identity(x)
}

Identity.prototype.map = function(f) {
  return Identity.of(f(this.__value))
}

Identity.prototype.trace = function() {
  return 'Identity(' + inspect(this.__value) + ')'
}

Identity.prototype.getInternalValue = function() {
  return this.__value
}

// Either

const Either = function() {}

Either.of = function(x) {
  return new Right(x)
}

const Left = function(x) {
  this.__value = x
}

Left.of = function(x) {
  return new Left(x)
}

Left.prototype.map = function(f) {
  return this
}

Left.prototype.ap = function(other) {
  return this
}

Left.prototype.join = function() {
  return this
}

Left.prototype.chain = function() {
  return this
}

Left.prototype.trace = function() {
  return 'Left(' + trace(this.__value) + ')'
}

Left.prototype.getInternalValue = function() {
  return this.__value
}

const Right = function(x) {
  this.__value = x
}

Right.of = function(x) {
  return new Right(x)
}

Right.prototype.map = function(f) {
  return Right.of(f(this.__value))
}

Right.prototype.chain = function(f) {
  return this.map(f).join()
}

Right.prototype.ap = function(other) {
  return this.chain(function(f) {
    return other.map(f)
  })
}

Right.prototype.join = function() {
  return this.__value
}

Right.prototype.chain = function(f) {
  return f(this.__value)
}

Right.prototype.trace = function() {
  return 'Right(' + trace(this.__value) + ')'
}

Right.prototype.getInternalValue = function() {
  return this.__value
}

module.exports = {
  Maybe,
  Identity,
  Right,
  Left,
  map,
  join,
  chain,
  trace
}
