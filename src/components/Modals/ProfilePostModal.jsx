import React, { useEffect, useRef } from 'react'
import Modal from '../Modal/Modal'
import PostFooter from '../FeedPosts/PostFooter'
import Caption from '../Comment/Caption'
import { MdDelete } from 'react-icons/md'
import Avatar from '../Avatar/Avatar'
import useUserProfileStore from '../../store/userProfileStore'
import useAuthStore from '../../store/authStore'
import Comment from '../Comment/Comment'


const ProfilePostModal = ({isOpen, onClose, post, handleDeletePost}) => {
    const userProfile = useUserProfileStore(state=>state.userProfile)
    const authUser = useAuthStore(state=>state.user)
    const commentsContainerRef = useRef(null)

    //adjust the scroll so you can always see the last comm (on mount aka on the first render and after a new comm is added)
    useEffect(()=>{
        const scrollToBottom = () => {
            commentsContainerRef.current.scrollTop = commentsContainerRef.current.scrollHeight
        }
        if(isOpen){
            //we use setTimeout because on the mount, react does not see scrollHeight
            setTimeout(()=>{
                scrollToBottom()
            },300)

        }

    },[isOpen,post.comments.length])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <div className="profile-post-modal-container">
            <div className="modal-img-container">
                <img  src={post.imageURL} alt="" />
            </div>
            <div className="modal-right-content">
                <div className="modal-header">
                    <Avatar size="sm" avatar={userProfile.profilePicURL}/>
                    <span className="username">{userProfile.username}</span>

                    {authUser?.uid === userProfile.uid &&(
                        <span className="delete-post-button" onClick={handleDeletePost}>
                            <MdDelete size="20"/>
                        </span>
                    )}
                </div>
                <div className="profile-post-info">
                        {/* caption */}
                        {post.caption && <Caption post={post}/>}
                        {/* comments */}
                        <div className="comments" ref={commentsContainerRef}>
                            {post.comments.map(comment=>
                                <Comment
                                    key={comment.id}
                                    comment={comment}
                            />)}
                        </div>
                        <div className="profile-post-footer">
                            <PostFooter post={post} isProfilePage={true}/>
                        </div>
                </div>
            </div>
        </div>


    </Modal>
  )
}

export default ProfilePostModal
