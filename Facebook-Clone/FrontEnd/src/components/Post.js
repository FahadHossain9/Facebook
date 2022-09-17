import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, NearMe, ThumbUp } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css'


function Post({ post }) {
  return (
    <div className='post'>
        <div className='post__top'>
            <Avatar src={post.profilePic} className="post__avatar"/>
            <div className='post_topInfo'>
                <h3>{post.fullName}</h3>
                <p>{post.date}</p>
            </div>
        </div>
        <div className='post__bottom'>
            <p>{post.message}</p>
        </div>
        <div className='post__image'>
            <img src={post.imgName} alt=""/>
        </div>

        <div className='post__options'>
            <div className='post__option'>
               <ThumbUp/>
               <p>Like</p>
            </div>
            <div className='post__option'>
               <ChatBubbleOutline/>
               <p>Comment</p>
            </div>
            <div className='post__option'>
               <NearMe/>
               <p>Share</p>
            </div>
            <div className='post__option'>
               <AccountCircle/>
               <ExpandMoreOutlined/>
            </div>
        </div>
    </div>
  )
}

export default Post