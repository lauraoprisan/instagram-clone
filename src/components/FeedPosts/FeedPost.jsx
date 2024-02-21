import { useState } from 'react'
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import useGetUserProfileById from '../../hooks/useGetUserProfileById'
import Loading from '../Loading/Loading';

const FeedPost = ({post}) => {

   const { userProfile} = useGetUserProfileById(post.createdBy)

    return (
        <div className="single-feedpost">
            <PostHeader post={post} creatorProfile={userProfile}/>
            <div className="image-post-container">
                <img src={post.imageURL} alt="feed post image" />
            </div>
            <PostFooter post={post} creatorProfile={userProfile}/>
        </div>
    )
}

export default FeedPost
