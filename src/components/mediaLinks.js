import React from "react"

import Medium from './medium.js'
import Github from './github.js'
import Instagram from './instagram.js'
import Linkedin from './linkedin.js'

const MediaLinks = (props) => (

  <div className="media-links">
    <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@mckenziefiege"><Medium /></a>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/mckenziefiege"><Github /></a>
    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mckenziefiege/"><Instagram /></a>
    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mckenziefiege"><Linkedin /></a>
  </div>
)

export default MediaLinks;
