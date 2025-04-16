import React from 'react';
import "./Timeline.css";
import TweetBox from './TweetBox';
import Post from './Post';



function Timeline() {
  return (
    <div className='timeline'>
        {/* ヘッダー　*/}
        <div className='timeline-header'> 
            <h2>ホーム</h2>
        </div>

        {/* 投稿ボックス */}
        <TweetBox />


        {/*　投稿 */}
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        



    </div>
  )
}

export default Timeline