import React from 'react';
import './Post.css';
import { MdAccountCircle } from 'react-icons/md';

function Post({ displayName, username, text }) {
    return (
        <div className="post">
            <div className="post__avatar">
                <MdAccountCircle />
            </div>
            <div className="post__content">
                <div className="post__header">
                    <span className="post__displayName">{displayName}</span>
                    <span className="post__username">@{username}</span>
                </div>
                <div className="post__text">
                    {text}
                </div>
                <div className="post__image">
                    Image Here
                </div>
                <div className="post__footer">
                    Footer
                </div>
            </div>
        </div>
    )
}

export default Post;
