import React from "react"
import { StaticQuery, graphql } from "gatsby"

import MediaLinks from './mediaLinks.js'

const About = ({ data }) => (
  <div className="about">
    <div>
      <p className="about__description">{data.description}</p>
      <MediaLinks links={data.media}/>
    </div>
    <div>
      <h2 className="about__title">Technical Skills</h2>
      <div className="about__skills">
        {data.skills.map(skill => <p className="about__skill" key={skill}>{skill}</p>)}
      </div>
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
