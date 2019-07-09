import React from "react";
import { graphql } from "gatsby";

import Link from 'gatsby-link';

import NavBar from '../components/navBar.js';
import Image from '../components/image.js';

export default class Projects extends React.Component {

  render() {
    const nodes = this.props.data.allProjectsJson.edges

    const gallery = nodes.map(obj => <Link key={obj.node.slug} to={obj.node.slug}><Image src={obj.node.src}/></Link>)

    return (
      <div>
        <NavBar />
        <p>My Projects</p>
          {gallery}
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
          slug
          src
        }
      }
    }
  }
`;
