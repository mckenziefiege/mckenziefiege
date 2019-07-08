import React from "react"
import { StaticQuery, graphql } from "gatsby"

const About = ({ data }) => (
  <div>
    <div>
      <h2>About Me</h2>
      <p>{data.description}</p>
    </div>
    <div>
      <h2>Technical Skills</h2>
      {data.skills.map(skill => <p key={skill}>{skill}</p>)}
    </div>
    <div>
      {data.media.map(obj => <a key={obj.site} href={obj.url}>{obj.site}</a>)}
    </div>
  </div>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allDataJson {
          edges {
            node {
              media {
                icon
                site
                url
              }
              skills
              description
            }
          }
        }
      }
    `}
    render={data => <About data={data.allDataJson.edges[0].node} {...props} />}
  />
)
