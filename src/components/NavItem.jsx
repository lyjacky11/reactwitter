import React from 'react';
import './NavItem.css';

function NavItem({ Icon, title, theme, active }) {
    return (
        <div id={theme} className={`navItem${active ? ` active` : ""}`}>
            <Icon className="navItem__icon" />
            <div className="navItem__title">
                {title}
            </div>
        </div>
    )
}

export default NavItem;
