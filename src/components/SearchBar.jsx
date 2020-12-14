import React from 'react';
import './SearchBar.css';
import { MdSearch } from 'react-icons/md';

function SearchBar() {
    return (
        <div className="searchBar">
            <MdSearch className="searchBar__icon" />
            <input className="searchBar__input" type="text" placeholder="Search Posts"></input>
        </div>
    )
}

export default SearchBar;
