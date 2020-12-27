import React, { useEffect, useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import { MdHome, MdPerson, MdChat, MdExplore, MdNotifications, MdSettings } from 'react-icons/md';
import { FaTwitter, FaLightbulb, FaMoon } from 'react-icons/fa';

/* Components */
import NavItem from './NavItem';

function Navigation() {
    const [activeNavItem, setActiveNavItem] = useState();
    const [activeThemeItem, setActiveThemeItem] = useState(0);
    const location = useLocation();

    // Navigation Items
    const navItems = useMemo(() => [
        { title: "Home", route: "/home", icon: MdHome },
        { title: "Profile", route: "/profile", icon: MdPerson },
        { title: "Messages", route: "/messages", icon: MdChat },
        { title: "Explore", route: "/explore", icon: MdExplore },
        { title: "Notifications", route: "/notifications", icon: MdNotifications },
        { title: "Settings", route: "/settings", icon: MdSettings }
    ], []);

    // Theme Items
    const themeItems = [
        { title: "Light", theme: "theme__light", icon: FaLightbulb },
        { title: "Dark", theme: "theme__dark", icon: FaMoon }
    ]

    // Set active nav item
    useEffect(() => {
        const route = location.pathname;
        var found = false;
        for (var i = 0; i < navItems.length; i++) {
            if (navItems[i].route === route) {
                setActiveNavItem(i);
                found = true;
                break;
            }
        }
        if (!found) {
            setActiveNavItem();
        }
    }, [location.pathname, navItems]);

    // Set theme
    useEffect(() => {
        const bodyClassList = document.querySelector("body").classList;
        const lightBtn = document.querySelector("#theme__light");
        const darkBtn = document.querySelector("#theme__dark");
        const savedTheme = localStorage.getItem("theme");

        // Default to light theme
        bodyClassList.value = "theme-light";
        setActiveThemeItem(0);

        // Fetch theme from local storage
        if (savedTheme === "dark") {
            bodyClassList.value = "theme-dark";
            setActiveThemeItem(1);
        }

        // Event listeners
        lightBtn.addEventListener("click", () => {
            bodyClassList.value = "theme-light";
            localStorage.setItem("theme", "light");
            setActiveThemeItem(0);
        })
        darkBtn.addEventListener("click", () => {
            bodyClassList.value = "theme-dark";
            localStorage.setItem("theme", "dark");
            setActiveThemeItem(1);
        })
    }, []);

    return (
        <div className="navigation">
            <div className="navigation__pages">
                <h2 className="navigation__title">
                    <FaTwitter className="navigation__titleIcon" />
                    <span className="navigation__titleText">Reactwitter</span>
                </h2>
                <div className="navigation__items">
                    {
                        navItems?.map((item, index) => (
                            <Link key={index} to={`${item.route}`}>
                                <NavItem
                                    key={index}
                                    id={index}
                                    title={item.title}
                                    Icon={item.icon}
                                    active={activeNavItem === index}
                                    setActive={setActiveNavItem}
                                />
                            </Link>

                        ))
                    }
                </div>
            </div>
            <div className="navigation__themes">
                <h3 className="navigation__title">
                    <span className="navigation__titleText">Theme</span>
                </h3>
                <div className="navigation__items">
                    {
                        themeItems?.map((item, index) => (
                            <NavItem
                                key={index}
                                id={index}
                                title={item.title}
                                Icon={item.icon}
                                theme={item.theme}
                                active={activeThemeItem === index}
                                setActive={setActiveThemeItem}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Navigation;
