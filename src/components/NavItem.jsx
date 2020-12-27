import React from 'react';
import './NavItem.css';

function NavItem({ id, title, Icon, theme, active, setActive }) {
    return (
        <div
            id={theme}
            className={`navItem${active ? ` active` : ""}`}
        // onClick={() => setActive(id)}
        >
            <Icon className="navItem__icon" />
            <div className="navItem__title">
                {title}
            </div>
        </div>
    )
}

export default NavItem;
