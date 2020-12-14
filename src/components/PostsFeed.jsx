import React from 'react';
import './PostsFeed.css';

/* Components */
import CreatePost from './CreatePost';
import Post from './Post';

function PostsFeed() {
    return (
        <div className="postsFeed">
            <h2>PostsFeed</h2>

            <CreatePost />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default PostsFeed;
