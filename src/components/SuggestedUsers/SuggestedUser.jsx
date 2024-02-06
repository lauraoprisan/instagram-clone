import React, { useState } from 'react'
import Avatar from '../Avatar/Avatar'

const SuggestedUser = ({name, followers, avatar}) => {
    const [isFollowed,setIsFollowed] = useState(false)

    const handleFollow = () => {
        setIsFollowed(!isFollowed)
    }

    return (
        <div className="suggested-user">
            <Avatar avatar={avatar} avatarSize="lg"/>
            <div className="suggested-user-info">
                <span className="username">{name}</span>
                <span className="subtle-text number-of-followers">{followers} followers</span>
            </div>
            <button onClick={handleFollow}>
                {isFollowed ? "Unfollow" : "Follow"}
            </button>

        </div>
  )
}

export default SuggestedUser
