import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import useAuthStore from '../../store/authStore'

const ProfileLink = () => {
  const authUser = useAuthStore(state=>state.user)
  console.log("authUser from profile link", authUser)
  return (
    <Link to="/ ">
        <Avatar avatar={authUser.profilePicURL} size="sm"/>
        <span className="on-desktop">Profile</span>
    </Link>
  )
}

export default ProfileLink
