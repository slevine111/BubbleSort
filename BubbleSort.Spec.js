const expect = require('chai').expec
const bubbleSort = require('./BubbleSort')

describe('bubbleSort function testing', () => {
  it('bubbleSort is a function', () => {
    expect(typeof bubbleSort).to.equal('function')
  })
  it('bubbleSort returns an array', () => {
    expect(Array.isArray(bubbleSort())).to.equal(true)
  })
  it('bubbleSort returns empty array if empty array is passed in', () => {
    expect(bubbleSort([])).to.eql([])
  })
})
