import React, { Component} from 'react';

import NavBar from './navBar.js'

import Image from '../components/image.js';

class Project extends Component {

  render() {
    const slug = this.props.pageContext.slug

    const arr = this.props.data.allProjectsJson.edges

    const image = arr.find(obj => obj.node.slug === slug).node

    const techUsed = image.technology_used.map(tech => <div>{tech}</div>)

    return (
      <div>
        <NavBar />
        <div className="project">
          <h1>{image.title}</h1>
          <p>{image.description}</p>
          <p>{techUsed}</p>
          <a href={image.github}>Github</a>
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
