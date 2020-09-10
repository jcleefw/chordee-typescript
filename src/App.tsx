import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styles from './App.module.scss'

import Header from './components/Header'
import HomePage from './pages/HomePage'
import Fretboard from './pages/Fretboard'

const App = () => {
  return (
    <div className="paper">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/fretboard">
            <Fretboard />
          </Route>
          {/* <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App
