import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="border fixed split-nav">
      <div className="nav-brand">
        <h3>
          <a href="/">Chordee</a>
        </h3>
      </div>
      <div className="collapsible">
        <input id="collapsible1" type="checkbox" name="collapsible1" />
        <label htmlFor="collapsible1">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </label>
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
      </div>
    </nav>
  )
}

export default Header
