import React, { useState } from 'react'
import {BsBookmark, BsGrid3X3, BsSuitHeart} from 'react-icons/bs'
import ProfilePosts from '../../components/Profile/ProfilePosts'
import useGetUserProfileByUsername from '../../hooks/useGetUserProfileByUsername'
import { Link, useParams } from "react-router-dom"
import ProfileHeader from '../../components/Profile/ProfileHeader'
import { Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'



const ProfilePage = () => {

    const {username} = useParams()
    const {isLoading, userProfile}= useGetUserProfileByUsername(username)

    const userNotFound = !isLoading && !userProfile

    if(userNotFound) return <UserNotFound/>

  return (
    <div className="profile-container">
        {!isLoading && userProfile && <ProfileHeader/>}
        {isLoading && <ProfileHeaderSkeleton />}
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

const UserNotFound = ()=>{
    return (
        <div className="user-not-found">
            <span>User not found</span>
            <Link to="/">
                <button>Go Home</button>
            </Link>
        </div>

    )
}

const ProfileHeaderSkeleton = () => {
	return (
		<Flex
			gap={{ base: 4, sm: 10 }}
			py={10}
			direction={{ base: "column", sm: "row" }}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<SkeletonCircle size='24' />

			<VStack alignItems={{ base: "center", sm: "flex-start" }} gap={2} mx={"auto"} flex={1}>
				<Skeleton height='12px' width='150px' />
				<Skeleton height='12px' width='100px' />
			</VStack>
		</Flex>
	);
};