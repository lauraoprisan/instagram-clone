import React from 'react'
import { Link } from 'react-router-dom'
import { NotificationsLogo } from "../../assets/constants";

const Notification = () => {
  return (
    <Link to="/ ">
        <NotificationsLogo />
        <span className="on-desktop">Notifications</span>
    </Link>
  )
}

export default Notification
