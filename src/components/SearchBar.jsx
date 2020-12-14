import React from 'react';
import './SearchBar.css';

function SearchBar() {
    return (
        <div className="searchBar">
            <input className="searchBar__input" type="text" placeholder="Search Posts"></input>
        </div>
    )
}

export default SearchBar;
