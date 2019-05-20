import React from "react"
import { Link } from "gatsby"

import "../styles/header.scss"

const Header = () => {
  return (
    <header>
      <h1>Steve Ingram</h1>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
