import React from "react"
import { graphql } from "gatsby"

import About from '../components/about.js'
import HomeHero from '../components/homeHero.js'

export default class IndexPage extends React.Component {

  render() {
    return (
      <div>
        <HomeHero />
        <About />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query MyQuery {
    allProjectsJson {
  		edges {
  			node {
  				title
          description
          technology_used
          type
          github
        }
      }
    }
  }
`;
