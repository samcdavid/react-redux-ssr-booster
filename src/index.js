import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './routes/App.js'
import './index.css'
import reducers from './apps/reducers.js'

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={ store } >
    <Router
      history={ browserHistory }
      routes={ App }
    />
  </Provider>,
  document.getElementById('root')
)
