import React, { useState, useEffect } from 'react'
import './Feed.css'
import StoryReel from './StoryReel' 
import MessageSender from './MessageSender'
import Post from './Post'
function Feed() {
  const [renderFeed, setRenderFeed] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect (() => {
    fetch("http://localhost:8080/post/post/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response => response.json()).then(
        obj =>{ 
          setPosts(obj);
        }
    );
  }, [renderFeed])

  return (
    <div className='feed'>
        <StoryReel/>
        <MessageSender setRenderFeed={setRenderFeed}/>

        {/* <Post
        profilePic="https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300"
        message = "Hello"
        timestamp="This is timestamp"
        username="FAHAD"
        imgName = "https://www.syracuse.com/resizer/LjTbKFiHmJSEJyboi68vnEYh40U=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/EAACMW43EZAVNDPNCAV26JZAFI.jpg"
        />
        <Post
         profilePic="https://pbs.twimg.com/media/FSXn9kjXEAscS0x?format=jpg&name=360x360"
         message = "Hello hi my friends"
         timestamp="This is timestamp"
         username="Rahat"/> */}
        {/* <Post/> */
          posts.map((p) => {
            return <Post key = { p.key } post = { p } />;
          })
        }
        {/* StoryReel */}
        {/* MessageSender */}

    </div>
  )
}

export default Feed