import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { MdMenu } from 'react-icons/md';
import InfiniteScroll from 'react-infinite-scroller';
import './PostsFeed.css';

/* Components */
import CreatePost from './CreatePost';
import Post from './Post';

function PostsFeed({ title }) {
    const [posts, setPosts] = useState([]);
    const [lastPost, setLastPost] = useState();
    const [morePosts, setMorePosts] = useState(false);
    const docLimit = 10;

    // Fetch initial posts
    useEffect(() => {
        document.title = `${title} | Reactwitter`;

        db.collection("posts").orderBy("timestamp", "desc").limit(docLimit).onSnapshot(snapshot => {
            const currentPosts = snapshot.docs.map(doc => ({ id: doc.id, post: doc.data() }));
            setPosts(currentPosts);
            setLastPost(currentPosts[currentPosts.length - 1]);
        })
        setMorePosts(true);

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

    // Fetch more posts
    const fetchMorePosts = () => {
        if (lastPost) {
            db.collection("posts").orderBy("timestamp", "desc").startAfter(lastPost.post.timestamp).limit(docLimit).onSnapshot(snapshot => {
                const newPosts = snapshot.docs.map(doc => (
                    { id: doc.id, post: doc.data() }
                ));
                if (newPosts.length > 0) {
                    // Last set of posts
                    if (newPosts.length < docLimit) {
                        // BUG: Last post of database gets duplicated on first load
                        setPosts(posts.concat(newPosts));
                        setLastPost(null);
                        setMorePosts(false);
                    }
                    else {
                        const newLastPost = newPosts[newPosts.length - 1];
                        setPosts(posts.concat(newPosts));
                        setLastPost(newLastPost);
                    }
                }
            },
                error => {
                    setMorePosts(false);
                    console.log(error);
                }
            )
        }
    };

    return (
        <div className="postsFeed">
            <div className="postsFeed__container">
                <div className="postsFeed__header">
                    <h3 className="postsFeed__title">{title}</h3>
                    {/* <div className="postsFeed__search">
                        <MdSearch className="postsFeed__searchIcon" />
                        <input className="postsFeed__searchInput" type="text" placeholder="Search Posts"></input>
                    </div> */}
                    <div className="postsFeed__menu">
                        <MdMenu className="postsFeed__menuIcon" />
                    </div>
                </div>
                <CreatePost />
            </div>
            <InfiniteScroll
                className="scroller"
                loadMore={fetchMorePosts}
                hasMore={morePosts}
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
