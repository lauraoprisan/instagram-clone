import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";

const Home = () => {
  return (
   <Link to="/ ">
        <AiFillHome size={25}/>
        <span className="on-desktop">Home</span>
    </Link>
  )
}

export default Home
