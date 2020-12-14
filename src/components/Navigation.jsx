import React from 'react';
import './Navigation.css';

/* Components */
import NavItem from './NavItem';

function Navigation() {
    return (
        <div className="navigation">
            <h2>Navigation</h2>

            {/* Logo */}
            <NavItem />
            <NavItem />
            <NavItem />
            <NavItem />
        </div>
    )
}

export default Navigation;
