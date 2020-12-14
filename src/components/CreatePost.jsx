import React, { useState } from 'react';
import firebase from 'firebase';
import { db } from '../firebase';
import './CreatePost.css';
import { MdAccountCircle } from 'react-icons/md';

function CreatePost() {
    const [inputField, setInputField] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputField !== "") {
            db.collection("posts").add({
                displayName: "Jacky Ly",
                username: "lyjacky11",
                text: inputField,
                imageUrl: "",
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            setInputField("");
        }
        else {
            alert("Please type something!");
        }
    }

    return (
        <div>
            <form className="createPost">
                <div className="createPost__avatar">
                    <MdAccountCircle />
                </div>
                <input className="createPost__input" type="text" onChange={(e) => setInputField(e.target.value)} value={inputField} placeholder="What's happening?" required></input>
                <button className="createPost__button" type="submit" onClick={handleSubmit}>Post</button>
            </form>
        </div>
    )
}

export default CreatePost;
