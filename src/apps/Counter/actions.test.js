import actions from './actions.js'

describe('counter actions', () => {
  it('has an INCREMENT action', () => {
    const hasIncrement = actions.hasOwnProperty('increment')
    expect(hasIncrement).toEqual(true)
  })

  it('knows how to INCREMENT', () => {
    expect(actions.increment).toEqual({ type: 'INCREMENT' })
  })

  it('has an DECREMENT action', () => {
    const hasDecrement = actions.hasOwnProperty('decrement')
    expect(hasDecrement).toEqual(true)
  })

  it('knows how to DECREMENT', () => {
    expect(actions.decrement).toEqual({ type: 'DECREMENT' })
  })
})
