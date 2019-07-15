import React, { Component} from 'react';

import Fade from 'react-reveal/Fade';

import NavBar from './navBar.js'
import Image from '../components/image.js';

class Project extends Component {

  render() {
    const slug = this.props.pageContext.slug

    const arr = this.props.data.allProjectsJson.edges

    const image = arr.find(obj => obj.node.slug === slug).node

    const techUsed = image.technology_used.map((tech, i) => <p className="project__tech--item">{tech}</p>)

    return (
      <div className="project">
        <NavBar />
        <Fade>
          <div className="project__page">
            <div className="project__container">
            <h1 className="project__title">{image.title}</h1>
            {image.github !== null && <a className="project__github first after" href={image.github}>Github</a>}
            <div className="project__tech">
              {techUsed}
            </div>
            <p className="project__description">{image.description}</p>
            </div>
            <Image className="project__image" src={image.src}/>
          </div>
        </Fade>
      </div>
    )
  }
}

export default Project;

export const pageQuery = graphql`
  query projectQuery {
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
