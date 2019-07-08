import React from "react"

// Components
import About from '../components/about.js'
import HomeHero from '../components/homeHero.js'
import NavBar from '../components/navBar.js'

export default class IndexPage extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <HomeHero />
        <About />
      </div>
    )
  }
};
