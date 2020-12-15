import React from 'react';
import './UserWidget.css';

import { MdAccountCircle } from 'react-icons/md';

function UserWidget() {
    return (
        <div className="userWidget">
            <MdAccountCircle className="userWidget__avatar" />
            <div className="userWidget__info">
                <h4 className="userWidget__displayName">Sample User</h4>
                <h5 className="userWidget__username">@demo</h5>
            </div>
        </div>
    )
}

export default UserWidget;
