import { useRef, useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants'
import usePostComment from '../../hooks/usePostComment';
import useAuthStore from '../../store/authStore';
import useLikePost from '../../hooks/useLikePost';
import { timeAgo } from "../../utils/timeAgo";
import CommentsModal from '../Modals/CommentsModal';

const PostFooter = ({post,creatorProfile,isProfilePage}) => {

    const {isCommenting, handlePostComment} = usePostComment()
    const [comment, setComment] = useState("")
    const authUser = useAuthStore(state=>state.user)
    const commentRef = useRef(null)
    const {handleLikePost, isLiked, likes} = useLikePost(post)
    const [isOpen, setIsOpen] = useState(false)

    const handleSubmitComment = async (e) => {
        e.preventDefault();
        await handlePostComment(post.id, comment);
        setComment("");
    }

  return (
    <div className="feedpost-footer">
        <div className="interaction-post-icons flex">
            <div onClick={handleLikePost}>
                {isLiked ? <UnlikeLogo/> : <NotificationsLogo/>}
            </div>
            <div onClick={()=>commentRef.current.focus()}>
                <CommentLogo/>
            </div>
        </div>
        <span className="number-of-likes">{likes} likes</span>
        {isProfilePage && (
            <span className="profile-post-created-at">Posted {timeAgo(post.createdAt)}</span>
        )}
        {/**in the homepage */}
        {!isProfilePage &&(
            <>
                <div className="feedpost-description flex">
                    <span className="username">{creatorProfile?.username}</span>
                    <span>{post.caption}</span>
                </div>
                {post.comments.length > 0 && (
                    <span className="subtle-text view-comments" onClick={()=>setIsOpen(true)}>
                        View all {post.comments.length} comments
                    </span>
                )}
                <CommentsModal isOpen={isOpen} onClose={()=>setIsOpen(false)} post={post}/>

            </>
        )}

        {authUser &&(
            <form action="" className="create-comment-form flex">
                <input type="text" placeholder="Add a comment..." onChange={(e)=>setComment(e.target.value)} value={comment} ref={commentRef}/>
                <button onClick={handleSubmitComment} className="create-post-btn" disabled={!comment} >Post</button>
            </form>
        )}

    </div>
  )
}

export default PostFooter
