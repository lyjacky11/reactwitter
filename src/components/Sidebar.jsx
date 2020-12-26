import React from 'react';
import './Sidebar.css';

/* Components */
import UserWidget from './UserWidget';

function Sidebar() {
    return (
        <div className="sidebar">
            <UserWidget />
            <br /><br />
            <div className="sidebar__title">
                <h2>Trending</h2>
            </div>
            <div className="sidebar__spacer"></div>
            <div className="sidebar__footer">
                <h4>© 2020 Jacky Ly.</h4>
                <h5>Developed with React and Firebase.</h5>
            </div>
        </div>
    )
}

export default Sidebar;
