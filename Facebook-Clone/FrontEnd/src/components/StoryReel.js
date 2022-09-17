import React from 'react'
import "./StoryReel.css"
import Story from './Story'
import AddStory from './AddStory'

import { useState, useEffect } from 'react'

function StoryReel() {
  const [storyIds, setStoryIds] = useState([]);
  const [renderReel, setRenderReel] = useState(false);

  useEffect(() =>  {
    fetch("http://localhost:8080/story/post/story", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response => response.json()).then(
        obj =>{ 
          setStoryIds(obj);
        }
    );
  }, [renderReel]);
  return (
    <div className='storyReel' style={{border:"1px dotted black",maxWidth:"60vw",overflow:"scroll",overflowY:"hidden"}}>
      <AddStory
      profileSrc="https://i.ytimg.com/vi/Ii8h7DCIcMo/maxresdefault.jpg"
      setRenderReel= { setRenderReel }
      />
      { 
        storyIds.map(s => {
          return  <Story
          image = { s.id } 
          title = { s.fullName } 
          key = {s.key} 
                  />;
        }) 
      }
    </div>
  )
}

export default StoryReel