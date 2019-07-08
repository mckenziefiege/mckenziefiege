import React from "react"
import { graphql } from "gatsby"

import Link from 'gatsby-link';

import NavBar from '../components/navBar.js'

export default class Projects extends React.Component {

  render() {
    const nodes = this.props.data.allProjectsJson.edges

    const titles = nodes.map(obj => <div><Link to={obj.node.slug}>{obj.node.title}</Link></div>)

    return (
      <div>
        <NavBar />
        <p>My Projects</p>
        {titles}
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
          src {
           dir
         }
        }
      }
    }
  }
`;

// export const pageQuery = graphql`
// query MyQuery {
//   allImageSharp {
//     edges {
//       node {
//         original {
//           src
//         }
//       }
//     }
//   }
// }
// `;
