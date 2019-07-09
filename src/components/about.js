import React from "react"
import { StaticQuery, graphql } from "gatsby"

import MediaLinks from './mediaLinks.js'

const About = ({ data }) => (
  <div>
    <div>
      <p>{data.description}</p>
      <MediaLinks links={data.media}/>
    </div>
    <div>
      <h2>Technical Skills</h2>
      {data.skills.map(skill => <p key={skill}>{skill}</p>)}
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
