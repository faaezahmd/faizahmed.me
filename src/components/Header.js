import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header class="site-header">
      <nav class="site-nav">
        <div class="logo">
          <Link to="/" aria-label="home">
            <h1>F</h1>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
