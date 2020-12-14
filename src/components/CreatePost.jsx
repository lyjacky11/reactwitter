import React from 'react';
import './CreatePost.css';
import { MdAccountCircle } from 'react-icons/md';

function CreatePost() {
    return (
        <div>
            <form className="createPost">
                <div className="createPost__avatar">
                    <MdAccountCircle />
                </div>
                <input className="createPost__input" type="text" placeholder="What's happening?" required></input>
                <button className="createPost__button" type="submit">Post</button>
            </form>
        </div>
    )
}

export default CreatePost;
