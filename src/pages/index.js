import React from "react"

import About from '../components/about.js'
import NavBar from '../components/navBar.js'

export default class IndexPage extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <About />
      </div>
    )
  }
};
