import React from 'react';
import { useStateValue } from "../StateProvider";
import { MdAccountCircle } from 'react-icons/md';
import { getAvatar } from "../api/getAvatar";
import './Profile.css';

function Profile() {
    const [{ user },] = useStateValue();

    return (
        <div className="profile">
            {
                user ?
                    <img className="profile__avatar" alt="Avatar" src={getAvatar(user.displayName)} />
                    : <MdAccountCircle className="profile__avatar" />
            }
            <div className="profile__userInfo">
                <h4 className="profile__displayName">Display Name:<br />{user ? user.displayName : "Not Logged In"}</h4>
                <br />
                <h4 className="profile__username">Email:<br />{user ? user.email : "N/A"}</h4>
            </div>
        </div>
    )
}

export default Profile;
