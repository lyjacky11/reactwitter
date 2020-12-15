import React, { useEffect, useState } from 'react';
import './Navigation.css';
import { MdHome, MdPerson, MdChat, MdExplore, MdNotifications, MdSettings } from 'react-icons/md';
import { FaMoon, FaLightbulb } from 'react-icons/fa';

/* Components */
import NavItem from './NavItem';

function Navigation({ Icon, title }) {
    const [activeTheme, setActiveTheme] = useState({});
    const [activeNavItem, setActiveNavItem] = useState(0);
    
    // Set navigation items
    const navItems = [
        { title: "Home", icon: MdHome },
        { title: "Profile", icon: MdPerson },
        { title: "Messages", icon: MdChat },
        { title: "Explore", icon: MdExplore },
        { title: "Notifications", icon: MdNotifications },
        { title: "Settings", icon: MdSettings }
    ]

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
            <div className="navigation__pages">
                <h2 className="navigation__title">
                    <Icon className="navigation__titleIcon" />
                    <span className="navigation__titleText">{title}</span>
                </h2>
                <div className="navigation__items">
                    {
                        navItems?.map((item, index) => (
                            <NavItem key={index} id={index} title={item.title} Icon={item.icon} active={activeNavItem === index} setActive={setActiveNavItem} />
                        ))
                    }
                </div>
            </div>
            <div className="navigation__spacer"></div>
            <div className="navigation__themes">
                <h3 className="navigation__title">
                    <span className="navigation__titleText">Theme</span>
                </h3>
                <div className="navigation__items">
                    <NavItem Icon={FaLightbulb} title="Light" theme="theme__light" active={activeTheme.light} />
                    <NavItem Icon={FaMoon} title="Dark" theme="theme__dark" active={activeTheme.dark} />
                </div>
            </div>
        </div>
    )
}

export default Navigation;
