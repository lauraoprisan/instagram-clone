import React, { useState } from 'react'
import Avatar from '../../components/Avatar/Avatar'
import {BsBookmark, BsGrid3X3, BsSuitHeart} from 'react-icons/bs'
import ProfilePosts from './ProfilePosts'


const ProfilePage = () => {
  return (
    <div className="profile-container">
        <div className="profile-header">
            <Avatar avatar="/images/profilepic.png" size="xlg"/>
            <div className="profile-user-data">
                <div className="flex profile-username-edit">
                    <span>username</span>
                    <button className="edit-profile-btn">Edit profile</button>
                </div>
                <div className="flex profile-numbers-data">
                    <span><span className="profile-numbers">4</span> Posts</span>
                    <span><span className="profile-numbers">154</span> Followers</span>
                    <span><span className="profile-numbers">456</span> Following</span>
                </div>
                <span className="username">Username</span>
                <p>Some description text here for all to see</p>
            </div>
        </div>
        <div className="profile-main-content">
            <div className="tabs">
                <div className="tab">
                    <div className="profile-icon">
                        <BsGrid3X3/>
                    </div>
                    <span className="on-desktop">Posts</span>
                </div>
                <div className="tab">
                    <div className="profile-icon">
                        <BsBookmark/>
                    </div>
                    <span className="on-desktop">Saved</span>
                </div>
                <div className="tab">
                    <div className="profile-icon">
                        <BsSuitHeart/>
                    </div>
                    <span className="on-desktop">Likes</span>
                </div>
            </div>

            <ProfilePosts/>
        </div>
    </div>
  )
}

export default ProfilePage
