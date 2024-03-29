import React from 'react';
import { useStateValue } from "../StateProvider";
import { MdAccountCircle } from 'react-icons/md';
import { getAvatar } from "../api/getAvatar";
import './UserWidget.css';


function UserWidget() {
    const [{ user },] = useStateValue();

    return (
        <div className="userWidget">
            {
                user ?
                    <img className="userWidget__avatar" alt="Avatar" src={getAvatar(user.displayName)} />
                    : <MdAccountCircle className="userWidget__avatar" />
            }
            <div className="userWidget__info">
                <h4 className="userWidget__displayName">{user ? user.displayName : "Not Logged In"}</h4>
                <h5 className="userWidget__username">{user ? user.email : ""}</h5>
            </div>
        </div>
    )
}

export default UserWidget;
