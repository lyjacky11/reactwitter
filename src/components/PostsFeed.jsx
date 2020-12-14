import React from 'react';
import './PostsFeed.css';

/* Components */
import SearchBar from './SearchBar';
import CreatePost from './CreatePost';
import Post from './Post';

function PostsFeed() {
    return (
        <div className="postsFeed">
            <div className="postsFeed__title">
                <h3>Home</h3>
                <SearchBar />
            </div>
            <CreatePost />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default PostsFeed;
