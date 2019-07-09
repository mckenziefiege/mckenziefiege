import React from "react"

import Link from 'gatsby-link';

const NavBar = () => (
  <div className="nav">
    <Link to="/" className="nav__link">
      Home
    </Link>
    <Link to="/projects" className="nav__link">
      Portfolio
    </Link>
  </div>
)

export default NavBar;
