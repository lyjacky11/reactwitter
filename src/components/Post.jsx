import React from 'react';
import './Post.css';
import { MdAccountCircle } from 'react-icons/md';

function Post() {
    return (
        <div className="post">
            <div className="post__avatar">
                <MdAccountCircle />
            </div>            
            <div className="post__content">
                <div className="post__header">
                    <span className="post__displayName">Jacky Ly</span>
                    <span className="post__username">@lyjacky11</span>
                </div>
                <div className="post__text">
                    Text Here
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
