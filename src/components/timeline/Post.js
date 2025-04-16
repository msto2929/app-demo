import { ChatBubbleOutline, FavoriteBorder, Repeat } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"

function Post({displayName, username, text, image, avatar}) {
  return (
    <div className='post'>
        <div className='post-avatar'>
            <Avatar src={avatar} />
        </div>
        <div className='post-body'>
        <div className='post-header'>
            <div className='post-headerText'>
                <h3>{displayName}</h3>
            </div>
            <div className='post-headerDescription'>
                <p>{text}</p>
            </div>
        </div>
        <img src={image}/>
        <div className='post-footer'>
            <ChatBubbleOutline fontSize='small' />
            <Repeat fontSize='small'/>
            <FavoriteBorder fontSize='small'/>
        </div>
        </div>
    </div>
  )
}

export default Post