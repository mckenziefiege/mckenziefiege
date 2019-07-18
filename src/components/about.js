import React from "react"
import { StaticQuery, graphql } from "gatsby"

import MediaLinks from './mediaLinks.js'
import HomeHero from './homeHero.js'

const About = ({ data }) => (
  <div className="about">
    <div className="about__hero-and-links">
      <HomeHero />
      <MediaLinks links={data.media}/>
    </div>
    <div className="about__flex">
      <h2 className="about__title">about me</h2>
      <p className="about__description">{data.description}</p>
    </div>
    <div className="about__flex">
      <h2 className="about__title">technical skills</h2>
      <div className="about__skills">
        {data.skills.map(skill => <span className="about__skill" key={skill}>{skill}</span>)}
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
