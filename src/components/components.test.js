import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import ReadOnlyField from './ReadOnlyField'

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const component = (
      <Button value='Bob' onClick={() => console.log('hi')} />
    )
    ReactDOM.render(component, div)
  })
})

describe('ReadOnlyField', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const component = (
      <ReadOnlyField value='Bob' />
    )
    ReactDOM.render(component, div)
  })
})
