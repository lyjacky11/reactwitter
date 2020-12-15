import React from 'react';
import './Navigation.css';
import { MdHome, MdPerson, MdChat, MdExplore, MdNotifications, MdSettings } from 'react-icons/md';

/* Components */
import NavItem from './NavItem';

function Navigation({ Icon, title }) {
    return (
        <div className="navigation">
            {/* Logo */}
            <h2 className="navigation__title">
                <Icon className="navigation__titleIcon" />
                <span className="navigation__titleText">{title}</span>
            </h2>
            <NavItem Icon={MdHome} title="Home" active />
            <NavItem Icon={MdPerson} title="Profile" />
            <NavItem Icon={MdChat} title="Messages" />
            <NavItem Icon={MdExplore} title="Explore" />
            <NavItem Icon={MdNotifications} title="Notifications" />
            <NavItem Icon={MdSettings} title="Settings" />
        </div>
    )
}

export default Navigation;
