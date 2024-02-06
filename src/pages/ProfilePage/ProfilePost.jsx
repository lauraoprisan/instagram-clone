import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'

const ProfilePost = ({img}) => {
  return (
    <>
        <div  className="profile-post-image-container">
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

    </>
  )
}

export default ProfilePost
