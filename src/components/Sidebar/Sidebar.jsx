import React from 'react'
import { Link } from 'react-router-dom'
import { InstagramLogo, InstagramMobileLogo } from '../../assets/constants'
import SidebarItems from './SidebarItems'
import { BiLogOut } from "react-icons/bi";
import useLogOut from '../../hooks/useLogout';

const Sidebar = () => {
    const {handleLogout,isLoggingOut} = useLogOut()

    return (
        <div className="sidebar-container">
                <Link to="/" className="on-desktop">
                    <InstagramLogo/>
                </Link>
                <Link to="/" className="on-mobile-tablet" >
                    <InstagramMobileLogo />
                </Link>
            <nav className="sidebar-nav">
            <SidebarItems/>
            </nav>
            <div className="log-out-container" onClick={handleLogout}>
                <div className="log-out-link flex">
                    <BiLogOut color="white" size="22px" />
                    <button className="on-desktop logout-btn">Log out</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
