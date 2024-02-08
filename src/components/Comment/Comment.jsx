import React from 'react'
import Avatar from '../Avatar/Avatar'

const Comment = ({createdAt,username,profilePic,text}) => {
  return (
    <div className="flex comment-container">
        <Avatar size="lg" avatar={profilePic}/>
        <div className="user-info">
            <span className="username">{username}</span>
            <span className="subtle-text date-of-post">{createdAt}</span>
        </div>
        <p className="comment-text">{text}</p>
    </div>
  )
}

export default Comment
