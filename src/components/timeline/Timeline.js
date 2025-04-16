import React, { useEffect, useState } from 'react';
import "./Timeline.css";
import TweetBox from './TweetBox';
import Post from './Post';
import db from "../../Firebase";
import { collection, getDocs,} from "firebase/firestore"; 
import { cleanup } from '@testing-library/react';


function Timeline() {

const [posts, setPosts] = useState([]);



  useEffect(() => {
    const postData = collection(db, "posts")
    getDocs(postData).then((querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);




  return (
    <div className='timeline'>
        {/* ヘッダー　*/}
        <div className='timeline-header'> 
            <h2>ホーム</h2>
        </div>

        {/* 投稿ボックス */}
        <TweetBox />


        {/*　投稿 */}
        {posts.map((post) => (
          <Post 
        key={post.text}
        displayName={post.displayName}
        text={post.text}
        avatar={post.avatar}
        image={post.image}
        />
        ))}
    </div>
  )
}

export default Timeline