import React from "react";
import { graphql } from "gatsby";
import Link from 'gatsby-link';

import Slide from 'react-reveal/Slide';

import NavBar from '../components/navBar.js';
import Image from '../components/image.js';

const ProjectImage = ({node}) => {

  return (
    <div>
      <Link key={node.slug} to={node.slug}><Image src={node.src}/></Link>
    </div>
  );
};

const Projects = ({data}) => (
  <div>
    <NavBar />
    <div className="projects row">
      <Slide left>
        <div className="column">
          {data.allProjectsJson.edges.map((edge, i) => i < 4 && <ProjectImage className="column__img" key={edge.node.title} node={edge.node} />)}
        </div>
      </Slide>

      <div className="column">
        {data.allProjectsJson.edges.map((edge, i) => (i >= 4 && i < 6) && <ProjectImage className="column__img" key={edge.node.title} node={edge.node} />)}
      </div>

      <Slide right>
        <div className="column">
          {data.allProjectsJson.edges.map((edge, i) => i >= 6 && <ProjectImage className="column__img" key={edge.node.title} node={edge.node} />)}
        </div>
      </Slide>
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
