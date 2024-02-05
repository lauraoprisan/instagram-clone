import React from 'react'
import { Link } from 'react-router-dom'
import { InstagramLogo, InstagramMobileLogo } from '../../assets/constants'
import SidebarItems from './SidebarItems'
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
            <Link to="/" className="on-desktop">
                <InstagramLogo/>
            </Link>
            <Link to="/" className="on-mobile-tablet" >
                <InstagramMobileLogo />
            </Link>
        <nav>
           <SidebarItems/>
        </nav>
        <div className="log-out-container">
            <Link to="/auth" className="log-out-link flex">
                <BiLogOut color="white" size="22px" />
                <span className="on-desktop">Log out</span>
            </Link>
        </div>
    </div>
  )
}

export default Sidebar
