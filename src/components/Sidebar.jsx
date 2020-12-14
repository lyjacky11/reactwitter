import React from 'react';
import './Sidebar.css';

/* Components */
import SearchBar from './SearchBar';
import Footer from './Footer';

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Sidebar</h2>
            <SearchBar />
            <Footer />
        </div>
    )
}

export default Sidebar;
