import React from 'react'
import { Link } from 'react-router-dom'
import { CreatePostLogo } from "../../assets/constants";

const CreatePost = () => {
  return (
    <Link to="/ ">
        <CreatePostLogo />
        <span className="on-desktop">Create</span>
    </Link>
  )
}

export default CreatePost
