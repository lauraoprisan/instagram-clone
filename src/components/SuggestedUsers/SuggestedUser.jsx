import React, { useState } from 'react'
import Avatar from '../Avatar/Avatar'
import useAuthStore from '../../store/authStore'
import useFollowUser from '../../hooks/useFollowUser'

const SuggestedUser = ({user, setUser}) => {
    const {isFollowing, isUpdating, handleFollowUser} = useFollowUser(user.uid)
    const authUser = useAuthStore(state=>state.user)

    const onFollowUser = async()=>{
        await handleFollowUser()
        // setUser({
        //     ...user,
        //     followers:isFollowing ? user.followers.filter((follower)=>follower.uid !== authUser.uid) : [...user.followers, authUser]
        // })
    }

    return (
        <div className="suggested-user">
            <Avatar avatar={user.profilePicURL} size="lg"/>
            <div className="suggested-user-info">
                <span className="username">{user.username}</span>
                <span className="subtle-text number-of-followers">{user.followers.length} followers</span>
            </div>
            {authUser.uid !== user.uid && (
                <button onClick={onFollowUser}>
                {isFollowing ? "Unfollow" : "Follow"}
                </button>
            )}


        </div>
  )
}

export default SuggestedUser
