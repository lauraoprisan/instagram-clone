import React, { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants'

const PostFooter = ({username, isProfilePage}) => {

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
        {!isProfilePage &&(
            <>
                <div className="feedpost-description flex">
                    <span className="username">{username}</span>
                    <span>feeling good</span>
                </div>
                <span className="subtle-text view-comments">View all 345 comments
                </span>
            </>
        )}

        <form action="" className="create-comment-form flex">
            <input type="text" placeholder="Add a comment..." />
            <button onClick={postComment} className="create-post-btn">Post</button>
        </form>
    </div>
  )
}

export default PostFooter
