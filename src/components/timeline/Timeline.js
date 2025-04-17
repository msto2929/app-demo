import React, { useEffect, useState } from 'react';
import "./Timeline.css";
import TweetBox from './TweetBox';
import Post from './Post';
import db from "../../Firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";

function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })));
    });

    return () => unsubscribe(); // クリーンアップ
  }, []);

  return (
    <div className='timeline'>
      {/* ヘッダー */}
      <div className='timeline-header'>
        <h2>ホーム</h2>
      </div>

      {/* 投稿ボックス */}
      <TweetBox />

      {/* 投稿一覧 */}
      <AnimatePresence>
  {posts.map((post) => (
    <motion.div
      key={post.id}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Post
        displayName={post.displayName}
        text={post.text}
        avatar={post.avatar}
        image={post.image}
      />
    </motion.div>
  ))}
</AnimatePresence>
    </div>
  );
}

export default Timeline;
