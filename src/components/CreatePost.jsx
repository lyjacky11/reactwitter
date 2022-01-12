import React, { useState } from 'react';
import firebase from 'firebase';
import { db } from '../firebase';
import { useStateValue } from "../StateProvider";
import { MdAccountCircle } from 'react-icons/md';
import { getAvatar } from "../api/getAvatar";
import './CreatePost.css';

function CreatePost() {
    const [inputField, setInputField] = useState("");
    const [imageField, setImageField] = useState("");
    const [{ user },] = useStateValue();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user) {
            if (inputField !== "") {
                db.collection("posts").add({
                    displayName: user.displayName,
                    username: user.email,
                    text: inputField,
                    imageUrl: imageField,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });
                setInputField("");
                setImageField("");
            }
            else {
                alert("Please type something!");
            }
        }
        else {
            alert("Please log in before creating a post!");
        }
    }

    return (
        <div className="createPost">
            <form className="createPost__form">
                <div className="createPost__avatar">
                    {
                        user ?
                            <img alt="Avatar" src={getAvatar(user.displayName)} />
                            : <MdAccountCircle />
                    }
                </div>
                <input className="createPost__input" type="text" onChange={(e) => setInputField(e.target.value)} value={inputField} placeholder="What's happening?"></input>
                <button className="createPost__button" type="submit" onClick={handleSubmit}>Post</button>
            </form>
            <input className="createPost__imageURL" type="text" onChange={(e) => setImageField(e.target.value)} value={imageField} placeholder="Image URL (optional)"></input>
        </div>
    )
}

export default CreatePost;
