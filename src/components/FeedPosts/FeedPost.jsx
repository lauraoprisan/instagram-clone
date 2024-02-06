import React, { useState } from 'react'
import Avatar from '../Avatar/Avatar'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants';

const FeedPost = ({img, username, avatar, avatarSize}) => {

    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(1000)

    const handleLike = () => {
        if(isLiked){
            setIsLiked(false)
            setLikes(likes-1)
        } else {
            setIsLiked(true)
            setLikes(likes+1)
        }
    }

    const postComment = () => {

    }

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

        <div className="feedpost-footer">
                <div className="interaction-post-icons flex">
                    <div onClick={handleLike}>
                        {isLiked ? <UnlikeLogo/> : <NotificationsLogo/>}
                    </div>
                    <div>
                        <CommentLogo/>
                    </div>
                </div>
                <span className="number-of-likes">{likes} likes</span>
                <div className="feedpost-description flex">
                    <span className="username">{username}</span>
                    <span>feeling good</span>
                </div>
                <span className="subtle-text view-comments">View all 345 comments</span>
                <form action="" className="create-comment-form flex">
                    <input type="text" placeholder="Add a comment..." />
                    <button onClick={postComment} className="create-post-btn">Post</button>
                </form>
            </div>
    </div>
  )
}

export default FeedPost
