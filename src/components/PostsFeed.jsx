import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { MdMenu, MdSearch } from 'react-icons/md';
import InfiniteScroll from 'react-infinite-scroller';
import './PostsFeed.css';

/* Components */
import CreatePost from './CreatePost';
import Post from './Post';

function PostsFeed({ title }) {
    const [posts, setPosts] = useState([]);
    const [lastPost, setLastPost] = useState();
    const [morePosts, setMorePosts] = useState(true);
    const docLimit = 10;

    const fetchMorePosts = () => {
        db.collection("posts").orderBy("timestamp", "desc").limit(docLimit).startAfter(lastPost).onSnapshot(snapshot => {
            setLastPost(snapshot.docs[snapshot.docs.length - 1]);
            const newPosts = snapshot.docs.map(doc => (
                { id: doc.id, post: doc.data() }
            ));
            setPosts(posts.concat(newPosts));
        }).catch(error => {
            setMorePosts(false);
            console.log(morePosts);
            console.log(error);
        });
    };

    useEffect(() => {
        document.title = `${title} | Reactwitter`;

        db.collection("posts").orderBy("timestamp", "desc").limit(docLimit).onSnapshot(snapshot => {
            setLastPost(snapshot.docs[snapshot.docs.length - 1]);
            setPosts(snapshot.docs.map(doc => (
                { id: doc.id, post: doc.data() }
            )))
        })

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
    }, [title]);

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
            <InfiniteScroll
                className="scroller"
                loadMore={fetchMorePosts}
                hasMore={false}
                loader={
                    <div key={0} className="loader">
                        <h6>Loading more posts...</h6>
                    </div>
                }
            >
                {
                    posts?.map(postInfo => (
                        <Link key={postInfo.id} to={`/post/${postInfo.id}`}>
                            <Post
                                key={postInfo.id}
                                post={postInfo.post}
                            />
                        </Link>
                    ))
                }
            </InfiniteScroll>
        </div>
    )
}

export default PostsFeed;
