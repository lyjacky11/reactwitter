import React, { useState } from 'react';
import firebase from 'firebase';
import { db } from '../firebase';
import './CreatePost.css';
import { MdAccountCircle } from 'react-icons/md';

function CreatePost() {
    const [inputField, setInputField] = useState("");
    const [imageField, setImageField] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputField !== "") {
            // db.collection("posts").add({
            //     displayName: "Sample User",
            //     username: "demo",
            //     text: inputField,
            //     imageUrl: imageField,
            //     timestamp: firebase.firestore.FieldValue.serverTimestamp()
            // });
            setInputField("");
            setImageField("");
        }
        else {
            alert("Please type something!");
        }
    }

    return (
        <div className="createPost">
            <form className="createPost__form">
                <div className="createPost__avatar">
                    <MdAccountCircle />
                </div>
                <input className="createPost__input" type="text" onChange={(e) => setInputField(e.target.value)} value={inputField} placeholder="What's happening?"></input>
                <button className="createPost__button" type="submit" onClick={handleSubmit}>Post</button>
            </form>
            <input className="createPost__imageURL" type="text" onChange={(e) => setImageField(e.target.value)} value={imageField} placeholder="Image URL (optional)"></input>
        </div>
    )
}

export default CreatePost;
