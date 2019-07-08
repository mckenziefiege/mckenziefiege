import React from "react"
import { graphql } from "gatsby"

import NavBar from '../components/navBar.js'

export default class Projects extends React.Component {

  render() {
    const nodes = this.props.data.allImageSharp.edges

    const gallery = nodes.map(obj => <img height="300" src={obj.node.original.src}/>)

    return (
      <div>
        <NavBar />
        <p>My Projects</p>
        {gallery}
      </div>
    )
  }
}

// export const pageQuery = graphql`
//   query MyQuery {
//     allProjectsJson {
//   		edges {
//   			node {
//   				title
//           description
//           technology_used
//           type
//           github
//           src {
//            dir
//          }
//         }
//       }
//     }
//   }
// `;

export const pageQuery = graphql`
query MyQuery {
  allImageSharp {
    edges {
      node {
        original {
          src
        }
      }
    }
  }
}
`;
