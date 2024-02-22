import React from 'react'
import Avatar from '../Avatar/Avatar'
import useGetUserProfileById from '../../hooks/useGetUserProfileById'
import Loading from "../Loading/Loading"
import { Link } from 'react-router-dom'
import {timeAgo} from '../../utils/timeAgo'

const Comment = ({comment}) => {
  const {userProfile,isLoading} = useGetUserProfileById(comment.createdBy)

  if(isLoading) return <Loading/>
  return (
    <div className="comment-container">
      <Link to={`/${userProfile.username}`}>
        <Avatar size="lg" avatar={userProfile.profilePicURL}/>
      </Link>
      <div className="user-info">
        <Link to={`/${userProfile.username}`}>
          <span className="username">{userProfile.username}</span>
        </Link>
        <span className="subtle-text date-of-post">
          {timeAgo(comment.createdAt)}
        </span>
      </div>
      <p className="comment-text">
        {comment.comment}
      </p>
    </div>
  )
}

export default Comment
