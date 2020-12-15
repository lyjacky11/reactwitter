import React from 'react';
import './Sidebar.css';

/* Components */
import UserWidget from './UserWidget';

function Sidebar({ title }) {
    return (
        <div className="sidebar">
            <UserWidget />
            <br /><br />
            <div className="sidebar__title">
                <h2>{title}</h2>
            </div>
            <br />
            <div className="sidebar__footer">
                <h4>© 2020 Reactwitter.</h4>
            </div>
        </div>
    )
}

export default Sidebar;
