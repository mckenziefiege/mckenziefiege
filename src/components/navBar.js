import React from "react"

import Link from 'gatsby-link';

const NavBar = () => (
  <div className="nav">
    <Link to="/" className="nav__link first after">Home</Link>
    <Link to="/projects" className="nav__link first after">Portfolio</Link>
  </div>
)

export default NavBar;
