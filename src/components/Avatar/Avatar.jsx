import React from 'react'

const Avatar = ({avatar,size}) => {
  return (
    <div className={`${size=="sm" ? "avatar-container avatar-sm" : size=="lg" ? "avatar-container avatar-lg" : "avatar-container avatar-xlg" }`}>
        <img src={avatar} alt="Profile picture logo" />
    </div>
  )
}

export default Avatar
