const R = require('ramda')

const trim = R.trim
const uppercase = R.toUpper
const replaceAwithZ = R.replace(/A/g, 'Z')

const processStrings = strings => {
  return strings
    .map(trim)
    .map(uppercase)
    .map(replaceAwithZ)
}

const processStringsFP = R.pipe(
  R.map(trim),
  R.map(uppercase),
  R.map(replaceAwithZ)
)

const processStringsQuick = strings => {
  return strings.map(
    R.pipe(
      trim,
      uppercase,
      replaceAwithZ
    )
  )
}

const processStringsQuickFP = R.map(
  R.pipe(
    trim,
    uppercase,
    replaceAwithZ
  )
)

const pipeOur = (...fns) => arg => fns.reduce((mem, curr) => curr(mem), arg)

const processStringsOur = strings => {
  return strings.map(pipeOur(trim, uppercase, replaceAwithZ))
}

module.exports = { processStrings, processStringsFP, processStringsQuick, processStringsQuickFP, processStringsOur }
