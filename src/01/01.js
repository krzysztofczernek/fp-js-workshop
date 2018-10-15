const splitOnSpace = text => text.split(' ')

// Exercise 01
// Implement splitFP so that splitOnSpaceFP is effectively equal to splitOnSpace

const splitFP = separator => text => text.split(separator)

const splitOnSpaceFP = splitFP(' ')

module.exports = {
  splitOnSpace,
  splitOnSpaceFP
}