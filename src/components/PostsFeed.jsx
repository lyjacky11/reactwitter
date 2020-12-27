import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { MdMenu, MdSearch } from 'react-icons/md';
import './PostsFeed.css';

/* Components */
import CreatePost from './CreatePost';
import Post from './Post';

function PostsFeed({ title }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        document.title = `${title} | Reactwitter`;
        db.collection("posts").orderBy("timestamp", "desc").limit(10).onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => (
                { id: doc.id, post: doc.data() }
            )))
        })
    }, [title]);

    useEffect(() => {
        const menuBtn = document.querySelector(".postsFeed__menu");
        const sidebar = document.querySelector(".sidebar");

        menuBtn.addEventListener("click", () => {
            if (sidebar.classList.contains("open_menu")) {
                sidebar.classList.remove("open_menu");
            }
            else {
                sidebar.classList.add("open_menu");
            }
        });
    }, []);

    return (
        <div className="postsFeed">
            <div className="postsFeed__container">
                <div className="postsFeed__header">
                    <h3 className="postsFeed__title">{title}</h3>
                    <div className="postsFeed__search">
                        <MdSearch className="postsFeed__searchIcon" />
                        <input className="postsFeed__searchInput" type="text" placeholder="Search Posts"></input>
                    </div>
                    <div className="postsFeed__menu">
                        <MdMenu className="postsFeed__menuIcon" />
                    </div>
                </div>
                <CreatePost />
            </div>
            {
                posts?.map(postInfo => (
                    <Link key={postInfo.id} to={`/post/${postInfo.id}`}>
                    <Post
                        key={postInfo.id}
                        id={postInfo.id}
                        post={postInfo.post}
                    />
                    </Link>
                ))
            }
        </div>
    )
}

export default PostsFeed;
