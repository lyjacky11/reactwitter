import React from 'react';
import moment from 'moment';
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
                    <span className="post__timestamp">{post.timestamp && moment(post.timestamp.toDate()).calendar()}</span>
                </div>
                <div className="post__text">
                    {post.text}
                </div>
                <div className="post__image">
                    <a href={post.imageUrl} target="_blank" rel="noreferrer"><img className="post__imageSrc" src={post.imageUrl} alt="" /></a>
                </div>
                {/* <p className="post__id">
                    ID: {id}
                </p> */}
            </div>
        </div>
    )
}

export default Post;
