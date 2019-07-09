import React, { Component} from 'react';

import NavBar from './navBar.js'

import Image from '../components/image.js';

class Project extends Component {

  render() {
    const slug = this.props.pageContext.slug

    const arr = this.props.data.allProjectsJson.edges

    const image = arr.find(obj => obj.node.slug === slug).node

    const techUsed = image.technology_used.map(tech => <p>{tech}</p>)

    return (
      <div className="project">
        <NavBar />
        <div className="project__page">
          <h1 className="project__title">{image.title}</h1>
          <p className="project__description">{image.description}</p>
          <div className="project__tech">
            {techUsed}
          </div>
          <a className="project__github" href={image.github}>Github</a>
          <Image src={image.src}/>
        </div>
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
