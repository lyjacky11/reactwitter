import React from 'react';
import './Sidebar.css';

/* Components */
import Footer from './Footer';

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Trending</h2>
            <br />
            <Footer />
        </div>
    )
}

export default Sidebar;
