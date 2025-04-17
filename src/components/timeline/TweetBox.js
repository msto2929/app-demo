import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import "./TweetBox.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import db from "../../Firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();

    if (!tweetMessage.trim()) return; // 空投稿防止

    try {
      await addDoc(collection(db, "posts"), {
        displayName: "まさと",
        text: tweetMessage,
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo0TLYaG2LxhC1F2ep4YLzGrvNY7iyQYEJnw&s",
        image: tweetImage,
        timestamp: serverTimestamp(),
      });


      setTweetMessage("");
      setTweetImage("");
    } catch (error) {
      console.error("投稿に失敗しました:", error);
    }
  };

  return (
    <div className='tweetBox'>
      <form onSubmit={sendTweet}>
        <div className='tweetBox-Input'>
          <Avatar />
          <input
            placeholder='4毒抜き仲間にシェアしよう'
            type='text'
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className='tweetBox-imageInput'
          placeholder='画像のURLを入力してください'
          type='text'
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          className='tweetBox-tweetButton'
          type='submit'
        >
          投稿する
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
