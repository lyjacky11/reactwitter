import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import './Sidebar.css';

/* Components */
import UserWidget from './UserWidget';

function Sidebar() {
    const [{ user },] = useStateValue();

    const handleAuth = () => {
        if (user) {
            auth.signOut();
        }
    };

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <UserWidget />
                <br />
                <div>
                    {
                        user ? <button type="button" className="sidebar__loginBtn" onClick={handleAuth}>Sign Out</button>
                            :
                            <>
                                <Link to="/login"><button type="button" className="sidebar__loginBtn">Log In</button></Link>
                                <Link to="/register"><button type="button" className="sidebar__loginBtn">Register</button></Link>
                            </>
                    }
                </div>
            </div>
            <div className="sidebar__footer">
                <h4>© 2021 Jacky Ly.</h4>
                <br />
                <h5>Developed with React & powered by Firebase.</h5>
            </div>
        </div>
    )
}

export default Sidebar;
