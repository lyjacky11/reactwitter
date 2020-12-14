import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import './PostsFeed.css';

/* Components */
import SearchBar from './SearchBar';
import CreatePost from './CreatePost';
import Post from './Post';

function PostsFeed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => (
                { id: doc.id, post: doc.data() }
            )))
        })
    }, []);

    return (
        <div className="postsFeed">
            <div className="postsFeed__container">
                <div className="postsFeed__title">
                    <h3>Home</h3>
                    <SearchBar />
                </div>
                <CreatePost />
            </div>            
            {
                posts?.map(postInfo => (
                    <Post
                        key={postInfo.id}
                        post={postInfo.post}
                    />
                ))
            }
        </div>
    )
}

export default PostsFeed;
