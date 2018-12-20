const R = require('ramda')

const trim = R.trim
const uppercase = R.toUpper
const replaceAwithZ = R.replace(/A/g, 'Z')

// Reference implementation
const processStrings = strings => {
  return strings
    .map(trim)
    .map(uppercase)
    .map(replaceAwithZ)
}

// Exercise #1
// Implement a processStrings version that is point-free
const processStringsPointfree = R.pipe(
  R.map(trim),
  R.map(uppercase),
  R.map(replaceAwithZ)
)

// Exercise #2
// Implement a processStrings version that only goes through the list once
const processStringsQuick = strings => {
  return strings.map(
    R.pipe(
      trim,
      uppercase,
      replaceAwithZ
    )
  )
}

// Exercise #3
// Implement a processStrings version that is point-free and only goes through the list once
const processStringsQuickPointfree = R.map(
  R.pipe(
    trim,
    uppercase,
    replaceAwithZ
  )
)

// Exercise #4
// Implement a processStrings version that is point-free, only goes through the list once, and doesn't use Ramda
const pipeOur = (...fns) => arg => fns.reduce((mem, curr) => curr(mem), arg)

const processStringsOur = strings => {
  return strings.map(pipeOur(trim, uppercase, replaceAwithZ))
}

module.exports = {
  processStrings,
  processStringsPointfree,
  processStringsQuick,
  processStringsQuickPointfree,
  processStringsOur
}
