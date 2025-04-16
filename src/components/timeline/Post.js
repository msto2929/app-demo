import { ChatBubbleOutline, FavoriteBorder, Repeat } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"

function Post() {
  return (
    <div className='post'>
        <div className='post-avatar'>
            <Avatar />
        </div>
        <div className='post-body'>
        <div className='post-header'>
            <div className='post-headerText'>
                <h3>まさと</h3>
            </div>
            <div className='post-headerDescription'>
                <p>こんにちは</p>
            </div>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzA2iaeUJl__7CSGyVvL_kyeUhHDJ2LK5qdw&s"/>
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