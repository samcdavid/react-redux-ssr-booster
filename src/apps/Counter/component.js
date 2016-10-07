import React, { Component } from 'react'
import Button from '../../components/Button'
import ReadOnlyField from '../../components/ReadOnlyField'
import { connect } from 'react-redux'

import actions from './actions'

export class Counter extends Component {
  render() {
    return (
      <section>
        Counter: <ReadOnlyField value={ this.props.counter } />
        <div>
          <Button value='+' onClick={ this.props.increment } />
          <Button value='-' onClick={ this.props.decrement } />
        </div>
      </section>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(actions.increment),
    decrement: () => dispatch(actions.decrement)
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
