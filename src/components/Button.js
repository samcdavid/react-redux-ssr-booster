import React, { Component } from 'react'

class Button extends Component {
  render() {
    const { props } = this
    return (
      <input type='button' { ...props } />
    )
  }
}

export default Button
