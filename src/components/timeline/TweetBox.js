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
        avatar: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh02MThGHzJpfb8N4JLTUeiULNOIUHxJJj2u0zKQIwQ62DJFW9a28m3ajQbQ6wSOZ1meChuuzxs755IFxkPXJqKLZBSPw3A5ukcZmzsi7J3XzEMW-0_V5H-ynJrU45Qav1ybl9cTTD3H1o/s800/icon_others_08.png",
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
            placeholder='いまどうしてる？'
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
