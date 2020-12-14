import React from 'react';
import './Post.css';
import { MdAccountCircle } from 'react-icons/md';

function Post({ id, post }) {
    return (
        <div className="post">
            <div className="post__avatar">
                <MdAccountCircle />
            </div>
            <div className="post__content">
                <div className="post__header">
                    <span className="post__displayName">{post.displayName}</span>
                    <span className="post__username">@{post.username}</span>
                    <span className="post__timestamp">{new Date(post.timestamp.toDate()).toUTCString()}</span>
                </div>
                <div className="post__text">
                    {post.text}
                </div>
                <div className="post__image">
                    <img className="post__imageSrc" src={post.imageUrl} alt="" />
                </div>
                {/* <div className="post__footer">
                    Footer
                </div> */}
            </div>
        </div>
    )
}

export default Post;
