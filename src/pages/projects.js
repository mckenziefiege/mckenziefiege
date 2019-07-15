import React from "react";
import { graphql } from "gatsby";
import Link from 'gatsby-link';

import Fade from 'react-reveal/Fade';

import NavBar from '../components/navBar.js';
import Image from '../components/image.js';

const ProjectImage = ({node}) => {

  return (
    <div className="container">
      <Link className="image" key={node.slug} to={node.slug}><Image src={node.src}/></Link>
      <div className="overlay">
        <div className="text">{node.title}</div>
      </div>
    </div>
  );
};

const Projects = ({data}) => (
  <div>
    <NavBar />
    <div className="projects row">
      <Fade left>
        <div className="column">
          {data.allProjectsJson.edges.map((edge, i) => i < 4 && <ProjectImage className="column__img" key={edge.node.title} node={edge.node} />)}
        </div>
      </Fade>

      <div className="column">
        {data.allProjectsJson.edges.map((edge, i) => (i >= 4 && i < 6) && <ProjectImage className="column__img" key={edge.node.title} node={edge.node} />)}
      </div>

      <Fade right>
        <div className="column">
          {data.allProjectsJson.edges.map((edge, i) => i >= 6 && <ProjectImage className="column__img" key={edge.node.title} node={edge.node} />)}
        </div>
      </Fade>
    </div>
  </div>
);

export default Projects;

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
          src
        }
      }
    }
  }
`;
