import React from 'react';
import moment from 'moment';
import { getAvatar } from "../api/getAvatar";
import './Post.css';

function Post({ post }) {
    return (
        <div className="post">
            <div className="post__avatar">
                <img className="userWidget__avatar" alt="Avatar" src={getAvatar(post.displayName)} />
            </div>
            <div className="post__content">
                <div className="post__header">
                    <span className="post__displayName">{post.displayName}</span>
                    <span className="post__username">{post.username}</span>
                    <span className="post__timestamp">{post.timestamp && moment(post.timestamp.toDate()).calendar()}</span>
                </div>
                <div className="post__text">
                    {post.text}
                </div>
                <div className="post__image">
                    <img className="post__imageSrc" src={post.imageUrl} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Post;
