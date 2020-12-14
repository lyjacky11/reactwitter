import React, { useState, useEffect } from 'react';
import './PostsFeed.css';

/* Components */
import SearchBar from './SearchBar';
import CreatePost from './CreatePost';
import Post from './Post';

function PostsFeed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts([
            {
                displayName: "Jacky Ly",
                username: "lyjacky11",
                text: "Testing states in React"
            },
            {
                displayName: "Seyon R",
                username: "seyon123",
                text: "Testing hooks and states"
            }
        ]);
    }, []);

    return (
        <div className="postsFeed">
            <div className="postsFeed__title">
                <h3>Home</h3>
                <SearchBar />
            </div>
            <CreatePost />
            {
                posts.map((post, i) => (
                    <Post
                        key={i}
                        displayName={post.displayName}
                        username={post.username}
                        text={post.text}
                    />
                ))
            }
        </div>
    )
}

export default PostsFeed;
