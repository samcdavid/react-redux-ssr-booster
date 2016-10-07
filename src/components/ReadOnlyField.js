import React, { Component } from 'react'

class ReadOnlyField extends Component {
  render() {
    const { props } = this
    const { value } = props

    return (
      <span { ...props }>
        { value }
      </span>
    )
  }
}

export default ReadOnlyField
