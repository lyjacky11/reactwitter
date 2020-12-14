import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">

            {/* User Widget */}
            
            <h2 className="sidebar__title">Trending</h2>            
            <div className="sidebar__footer">
                <br />
                <p>© 2020 Reactwitter.</p>
            </div>
        </div>
    )
}

export default Sidebar;
