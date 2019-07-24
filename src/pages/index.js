import React from "react"

// import Fade from 'react-reveal/Fade';
import Link from 'gatsby-link';
import Image from '../components/image.js';
import About from '../components/about.js'
import Particles from 'react-particles-js';

const ProjectImage = ({node}) => {

  return (
    <Link key={node.slug} to={node.slug}>
      <div className="container">
        <Image className="image" src={node.src}/>
        <div className="overlay">
          <div className="text">{node.title}</div>
        </div>
      </div>
    </Link>
  );
};

const Projects = (data) => (

    <div className="projects row">

        <div className="column">
          {data.data.allProjectsJson.edges.map((edge, i) => i < 4 && <ProjectImage className="column__img" key={edge.node.title} node={edge.node} />)}
        </div>
      

      <div className="column">
        {data.data.allProjectsJson.edges.map((edge, i) => (i >= 4 && i < 7) && <ProjectImage className="column__img" key={edge.node.title} node={edge.node} />)}
      </div>


        <div className="column">
          {data.data.allProjectsJson.edges.map((edge, i) => i >= 7 && <ProjectImage className="column__img" key={edge.node.title} node={edge.node} />)}
        </div>

    </div>
);

export default class IndexPage extends React.Component {

  render() {
    return (
      <div className="index-page">
        <Particles
           params={{
               "particles": {
                   "number": {
                     "value": 40,
                     "density": {
                       "enable": true
                     }
                   },
                   "color": {
                     "value": ["#FF9000", "#ACF39D", "#FE6959", "#4ECDC4"]
                   },
                   "shape": {
                     "type": "circle",
                     "polygon": {
                       "nb_sides": 4
                     }
                   },
                   "opacity": {
                     "value": .9,
                     "random": false,
                     "anim": {
                       "enable": false,
                       "speed": 1,
                       "opacity_min": 0.8,
                       "sync": false
                     }
                   },
                   "size": {
                     "value": 12,
                     "random": true,
                     "anim": {
                       "enable": false,
                       "speed": 40,
                       "size_min": 0.1,
                       "sync": false
                     }
                   },
                   "line_linked": {
                     "enable": true,
                     "distance": 0,
                     "color": "#ffffff",
                     "opacity": 0.3687847739990702,
                     "width": 0.6413648243462091
                   },
                   "move": {
                     "enable": true,
                     "speed": 1.5,
                     "direction": "none",
                     "random": false,
                     "straight": false,
                     "out_mode": "out",
                     "bounce": false,
                     "attract": {
                       "enable": false,
                       "rotateX": 600,
                       "rotateY": 1200
                     }
                   }
               },
               "interactivity": {
                 "detect_on": "window",
                 "events": {
                   "onhover": {
                     "enable": false,
                     "mode": "repulse"
                   },
                   "onclick": {
                     "enable": true,
                     "mode": "push"
                   },
                   "resize": true
                 },
                   "modes": {
                     "grab": {
                       "distance": 400,
                       "line_linked": {
                         "opacity": 1
                       }
                     },
                     "bubble": {
                       "distance": 400,
                       "size": 40,
                       "duration": 2,
                       "opacity": 8,
                       "speed": 3
                     },
                     "repulse": {
                       "distance": 100,
                       "duration": 0.4
                     },
                     "push": {
                       "particles_nb": 4
                     },
                     "remove": {
                       "particles_nb": 2
                     }
                   }
               },
               "retina_detect": true
             }} />

        <About />
        <div className="projects-container">
          <Projects data={this.props.data}/>
        </div>

    </div>
    )
  }
};


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
