import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import useAuthStore from '../../store/authStore'

const ProfileLink = () => {
  const authUser = useAuthStore(state=>state.user)
  return (
    <Link to={`/${authUser?.username}`}>
        <Avatar avatar={authUser?.profilePicURL} size="sm"/>
        <span className="on-desktop">Profile</span>
    </Link>
  )
}

export default ProfileLink
