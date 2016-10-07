import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import App from './routes/App.js'
import './index.css'

ReactDOM.render(
  <Router
    history={ browserHistory }
    routes={ App }
  />,
  document.getElementById('root')
)
