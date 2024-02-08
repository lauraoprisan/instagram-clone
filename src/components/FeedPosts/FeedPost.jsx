import React, { useState } from 'react'
import Avatar from '../Avatar/Avatar'
import PostFooter from './PostFooter';

const FeedPost = ({img, username, avatar, avatarSize}) => {


  return (
    <div className="single-feedpost">
        <div className="feedpost-header">
            <div className="feedpost-user-data flex">
                <Avatar avatar={avatar} size={avatarSize}/>
                <span>{username}</span>
                <span className="subtle-text created-at">• 1w</span>
            </div>
            <button className="follow-post-btn">
                Unfollow
            </button>
        </div>
        <div className="image-post-container">
            <img src={img} alt="" />
        </div>
        <PostFooter/>
    </div>
  )
}

export default FeedPost
