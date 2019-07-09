import React from "react"

const MediaLinks = (props) => (

  <div>
    <h1>links!{console.log(props)}</h1>
    {props.links.map(obj => <a key={obj.site} href={obj.url}>{obj.site}</a>)}
  </div>
)

export default MediaLinks;
