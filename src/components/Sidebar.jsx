import React, { useEffect } from 'react';
import './Sidebar.css';

/* Components */
import UserWidget from './UserWidget';

function Sidebar() {
    useEffect(() => {
        const menuBtn = document.querySelector(".postsFeed__menu");
        const sidebar = document.querySelector(".sidebar");

        menuBtn.addEventListener("click", () => {
            if (sidebar.classList.contains("open_menu")) {
                sidebar.classList.remove("open_menu");
            }
            else {
                sidebar.classList.add("open_menu");
            }
        });
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <UserWidget />
                <br /><br />
                <div className="sidebar__title">
                    <h2>Trending</h2>
                </div>
            </div>            
            <div className="sidebar__footer">
                <h4>© 2020 Jacky Ly.</h4>
                <h5>Developed with React and Firebase.</h5>
            </div>
        </div>
    )
}

export default Sidebar;
