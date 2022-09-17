import { Avatar } from '@mui/material'
import React from 'react'
import "./Story.css"
function Story({image, profileSrc, title}) {
  const imageURL = "http://localhost:8080/story/post/image/" + image;
  return (
    <div style={{backgroundImage: `url(${imageURL})`}} className='story'>
    <Avatar className='story__avatar' src = {profileSrc}/>
    <h4>{title}</h4>
    </div>
  )
}

export default Story