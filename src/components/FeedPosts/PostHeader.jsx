import React from 'react'
import Avatar from '../Avatar/Avatar'
import {Link} from 'react-router-dom'
import { Skeleton, SkeletonCircle } from '@chakra-ui/react'
import useFollowUser from '../../hooks/useFollowUser'
import { timeAgo } from '../../utils/timeAgo'

const PostHeader = ({post,creatorProfile}) => {

    const {handleFollowUser,isFollowing,isUpdating} = useFollowUser(post.createdBy)
  return (
    <div className="feedpost-header">
        <div className="feedpost-user-data flex">
            {creatorProfile ? (
                    <Link to={`/${creatorProfile.username}`}>
                        <Avatar avatar={creatorProfile.profilePicURL} size="sm"/>
                    </Link>
            ):(
                <SkeletonCircle size='10' />
            )}
            {creatorProfile ? (
                 <Link to={`/${creatorProfile.username}`}>
                    <span>{creatorProfile.username}</span>
                </Link>
            ):(
                <Skeleton w={"100px"} h={"10px"} />
            )}
            <span className="subtle-text created-at">• {timeAgo(post.createdAt)}</span>
        </div>
        <button className="follow-post-btn" onClick={handleFollowUser}>
            {isFollowing ? "Unfollow" : "Follow"}
        </button>
    </div>
  )
}

export default PostHeader
