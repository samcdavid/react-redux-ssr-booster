import React from 'react'
import ReactDOM from 'react-dom'
import Component from '.'

it('renders without crashing', () => {
    const div = document.createElement('div')
    const component = (
      <Component
        store={{
          subscribe: () => {},
          dispatch: () => {},
          getState: () => ({ counter: 0 })
        }} />
    )
    ReactDOM.render(component, div)
})
