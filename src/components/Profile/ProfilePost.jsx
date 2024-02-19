import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import Modal from '../Modal/Modal'
import Avatar from '../Avatar/Avatar'
import Comment from '../Comment/Comment'
import PostFooter from '../FeedPosts/PostFooter'
import useUserProfileStore from '../../store/userProfileStore'
import useAuthStore from '../../store/authStore'

const ProfilePost = ({post}) => {

    const [isOpen, setIsOpen] = useState(false)
    const userProfile = useUserProfileStore(state=>state.userProfile)
    const authUser = useAuthStore(state=>state.user)


  return (
    <div className="wrapper-test">
        <div  className="profile-post-image-container" onClick={()=> setIsOpen(true)}>
            <img src={post.imageURL} alt="" />
            <div className="image-hover-layer flex">
                <div>
                    <AiFillHeart/>
                    <span>{post.likes.length}</span>
                </div>
                <div>
                    <FaComment/>
                    <span>{post.comments.length}</span>
                </div>

            </div>
        </div>
        <Modal open={isOpen} onClose={()=> setIsOpen(false)} img={post.imageURL} forComponent="profilePost">
            <div className="modal-header">
                <Avatar size="sm" avatar={userProfile.profilePicURL}/>
                <span className="username">{userProfile.username}</span>

               {authUser?.uid === userProfile.uid &&(
                 <span className="delete-post-button">
                    <MdDelete size="20"/>
                 </span>
               )}
            </div>
            <div className="profile-post-info">
                <div className="comments">
                    <Comment
                        createdAt="1d ago"
                        username="username272"
                        profilePic="/images/profilepic.png"
                        text={`Dummy comment text`}
                    />
                    <Comment
                        createdAt="1d ago"
                        username="username272"
                        profilePic="/images/profilepic.png"
                        text={`Dummy comment text`}
                    />
                </div>
                <div className="profile-post-footer">
                    <PostFooter username="username272" isProfilePage={true}/>
                </div>
            </div>

        </Modal>
    </div>
  )
}

export default ProfilePost
