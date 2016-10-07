const reducers = {
  INCREMENT(state, action) {
    return state + 1
  },
  DECREMENT(state, action) {
    return state - 1
  }
}

export default (state = 0, action) => {
  const { type } = action

  if(reducers.hasOwnProperty(type)) {
    return reducers[type](state, action)
  }
  return state
}
