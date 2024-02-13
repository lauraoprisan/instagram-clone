import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import Modal from '../Modal/Modal'
import Avatar from '../Avatar/Avatar'
import Comment from '../Comment/Comment'
import PostFooter from '../FeedPosts/PostFooter'

const ProfilePost = ({img}) => {

    const [isOpen, setIsOpen] = useState(false)


  return (
    <div className="wrapper-test">
        <div  className="profile-post-image-container" onClick={()=> setIsOpen(true)}>
            <img src={img} alt="" />
            <div className="image-hover-layer flex">
                <div>
                    <AiFillHeart/>
                    <span>7</span>
                </div>
                <div>
                    <FaComment/>
                    <span>7</span>
                </div>

            </div>
        </div>
        <Modal open={isOpen} onClose={()=> setIsOpen(false)} img={'/images/img1.png'} forComponent="profilePost">
            <div className="modal-header">
                <Avatar size="sm" avatar="/images/profilepic.png"/>
                <span className="username">username</span>

                <span className="delete-post-button">
                    <MdDelete size="20"/>
                </span>
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
