import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import FretboardPage from './pages/FretboardPage'
import HomePage from './pages/HomePage'
import ChordForm from './pages/ChordForm/index'

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
            <FretboardPage />
          </Route>
          <Route path="/chord-finder">
            <ChordForm />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
