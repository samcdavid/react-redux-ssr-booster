import counter from './reducer.js'

describe('counter reducer', () => {
  it('has a default state', () => {
    expect(counter(undefined, {})).toBe(0)
  })

  it('will INCREMENT the count', () => {
    expect(counter(0, { type: 'INCREMENT' })).toBe(1)
  })

  it('will DECREMENT the count', () => {
    expect(counter(1, { type: 'DECREMENT' })).toBe(0)
  })

  it('ignores unknown actions', () => {
    expect(counter(0, { type: 'BOBBERY' })).toBe(0)
  })
})
