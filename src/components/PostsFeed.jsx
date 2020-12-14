import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { MdSearch } from 'react-icons/md';
import './PostsFeed.css';

/* Components */
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
                <div className="postsFeed__header">
                    <h3 className="postsFeed__title">Home</h3>
                    <div className="postsFeed__search">
                        <MdSearch className="postsFeed__searchIcon" />
                        <input className="postsFeed__searchInput" type="text" placeholder="Search Posts"></input>
                    </div>
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
