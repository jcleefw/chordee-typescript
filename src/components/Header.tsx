import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="border fixed split-nav row">
      <div className="nav-brand">
        <h4>
          <a href="/">Chordee</a>
        </h4>
      </div>
      <div className="collapsible">
        <label htmlFor="collapsible1">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </label>
      </div>

      <div className="collapsible-body">
        <ul className="inline">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/fretboard">Fretboard</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
