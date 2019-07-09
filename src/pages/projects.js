import React from "react";
import { graphql } from "gatsby";

import Link from 'gatsby-link';

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
    {data.allProjectsJson.edges.map((edge) => <ProjectImage key={edge.node.title} node={edge.node} />)}
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
