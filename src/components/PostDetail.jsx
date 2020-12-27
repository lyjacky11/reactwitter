import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import './PostDetail.css';

/* Components */
import HeaderTop from './HeaderTop';
import Post from './Post';

function PostDetail({ postId, title }) {
    const [post, setPost] = useState({});

    useEffect(() => {
        document.title = `${title} | Reactwitter`;
        db.collection("posts").doc(postId).get().then(post => {
            setPost(post.data());
        });
    }, [postId, title]);

    return (
        <div className="postDetail">
            <HeaderTop title="Post" />
            <Post post={post} />
        </div>
    )
}

export default PostDetail;
