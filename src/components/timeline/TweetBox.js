import { Avatar, Button } from '@mui/material'
import React from 'react'
import "./TweetBox.css"

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox-Input'>
            <Avatar />
            <input placeholder='4毒抜き仲間にシェアしよう'
            type='text'></input>
            </div>
            <input className='tweetBox-imageInput' placeholder='画像のURLを入力してください'
            type='text'></input>
            <Button className='tweetBox-tweetButton' type='submit'>投稿する</Button>
        </form>


    </div>
  )
}

export default TweetBox