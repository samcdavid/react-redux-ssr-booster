import React, { Component } from 'react'
import logo from '../../assets/logo.svg'
import './index.css'

import Counter from '../../apps/Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        </p>
        <Counter />
      </div>
    )
  }
}

export default App
