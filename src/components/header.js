import React from "react"
import { Link } from "gatsby"

import headerStyles from "../styles/header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          Steve Ingram
        </Link>
      </h1>

      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.link} to="/">
              Home
            </Link>
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
