import React from "react"
import { StaticQuery, graphql } from "gatsby"

const renderProjects = props => (
  <StaticQuery
    query={graphql`
      query {
        allProjectsJson {
          edges {
            node {
              title
            }
          }
        }
      }
    `}
    render={data =>
      data.allProjectsJson.edges.map((project, i) => (
        <div key={i}>{project.node.title}</div>
      ))
    }
  />
);


export default class IndexPage extends React.Component {

  render() {
    return (
      <div>
        <h1>McKenzie Fiege</h1>
        <h2>Full Stack Developer</h2>
        {renderProjects()}
      </div>
    )
  }

}
