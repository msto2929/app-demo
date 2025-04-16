import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import "./TweetBox.css"
import { collection, addDoc } from "firebase/firestore"; 

function TweetBox() {
const [tweetMassage, setTweetMessage] = useState("")
const [tweetImage, setTweetImage] = useState("")

const sendTweet = (e) => {
  e.preventDefault();


};

  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox-Input'>
            <Avatar />
            <input placeholder='4毒抜き仲間にシェアしよう'
            type='text'
            onChange={(e) => setTweetMessage(e.target.value)}
            ></input>
            </div>
            <input className='tweetBox-imageInput' placeholder='画像のURLを入力してください'
            type='text'
            onChange={(e) => setTweetImage(e.target.value)}
            ></input>
            <Button className='tweetBox-tweetButton' type='submit'
            onClick={sendTweet}
            >投稿する</Button>
        </form>


    </div>
  )
}

export default TweetBox