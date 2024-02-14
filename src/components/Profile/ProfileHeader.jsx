import Avatar from '../Avatar/Avatar'
import useUserProfileStore from "../../store/userProfileStore"
import useAuthStore from "../../store/authStore"
import { useState } from 'react'
import EditProfile from './EditProfile'


const ProfileHeader = () => {

    const {userProfile}= useUserProfileStore()
    const authUser = useAuthStore(state=>state.user)
    const visitingOwnProfile = authUser && authUser.username === userProfile.username
    const visitingAnotherProfileAndAuth = authUser && authUser.username !== userProfile.username
    const [isOpen, setIsOpen] = useState(false)


  return (
     <div className="profile-header">

        <Avatar avatar={userProfile.profilePicURL} size="xlg"/>
        <div className="profile-user-data">
            {visitingOwnProfile && (
                <div className="flex profile-username-edit">
                    <span>{userProfile.username}</span>
                    <button className="edit-profile-btn" onClick={()=>setIsOpen(true)}>Edit profile</button>
                </div>
            )}

            {visitingAnotherProfileAndAuth && (
                <div className="flex profile-username-edit">
                    <span>{userProfile.username}</span>
                    <button className="follow-profile-btn">Follow</button>
                </div>
            )}


            <div className="flex profile-numbers-data">
                <span><span className="profile-numbers">{userProfile.posts.length}</span> Posts</span>
                <span><span className="profile-numbers">{userProfile.followers.length}</span> Followers</span>
                <span><span className="profile-numbers">{userProfile.following.length}</span> Following</span>
            </div>
            <span className="username">{userProfile.fullName}</span>
            <p className="bio" >{userProfile.bio}</p>
        </div>
        {isOpen && <EditProfile open={isOpen} onClose={()=>setIsOpen(false)}/>}

    </div>

  )
}

export default ProfileHeader
