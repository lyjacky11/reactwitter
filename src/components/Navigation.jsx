import React, { useEffect, useState } from 'react';
import './Navigation.css';
import { MdHome, MdPerson, MdChat, MdExplore, MdNotifications, MdSettings } from 'react-icons/md';
import { FaMoon, FaLightbulb } from 'react-icons/fa';

/* Components */
import NavItem from './NavItem';

function Navigation({ Icon, title }) {
    const [activeTheme, setActiveTheme] = useState({});

    // Set theme
    useEffect(() => {
        const bodyClassList = document.querySelector("body").classList;
        const lightBtn = document.querySelector("#theme__light");
        const darkBtn = document.querySelector("#theme__dark");
        const savedTheme = localStorage.getItem("theme");
        
        // Default to light theme
        bodyClassList.value = "theme-light";
        setActiveTheme({
            "light": true,
            "dark": false
        });
        // Fetch theme from local storage
        if (savedTheme === "dark") {
            bodyClassList.value = "theme-dark";
            setActiveTheme({
                "light": false,
                "dark": true
            });
        }
        // Event listeners
        lightBtn.addEventListener("click", () => {
            bodyClassList.value = "theme-light";
            localStorage.setItem("theme", "light");
            setActiveTheme({
                "light": true,
                "dark": false
            });
        })
        darkBtn.addEventListener("click", () => {
            bodyClassList.value = "theme-dark";
            localStorage.setItem("theme", "dark");
            setActiveTheme({
                "light": false,
                "dark": true
            });
        })
    }, []);

    return (
        <div className="navigation">
            <h2 className="navigation__title">
                <Icon className="navigation__titleIcon" />
                <span className="navigation__titleText">{title}</span>
            </h2>
            <div className="navigation__items">
                <NavItem Icon={MdHome} title="Home" active />
                <NavItem Icon={MdPerson} title="Profile" />
                <NavItem Icon={MdChat} title="Messages" />
                <NavItem Icon={MdExplore} title="Explore" />
                <NavItem Icon={MdNotifications} title="Notifications" />
                <NavItem Icon={MdSettings} title="Settings" />
            </div>
            <br />
            <hr />
            <h3 className="navigation__title">
                <span className="navigation__titleText">Theme</span>
            </h3>
            <div className="navigation__themes">
                <NavItem Icon={FaLightbulb} title="Light" theme="theme__light" active={activeTheme.light} />
                <NavItem Icon={FaMoon} title="Dark" theme="theme__dark" active={activeTheme.dark} />
            </div>
        </div>
    )
}

export default Navigation;
