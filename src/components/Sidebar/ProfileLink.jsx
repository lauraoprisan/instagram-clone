import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'

const ProfileLink = () => {
  return (
    <Link to="/ ">
        <Avatar avatar="./images/profilepic.png" size="sm"/>
        <span className="on-desktop">Profile</span>
    </Link>
  )
}

export default ProfileLink
