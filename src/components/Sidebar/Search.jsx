import React from 'react'
import { Link } from 'react-router-dom'
import { SearchLogo } from "../../assets/constants";

const Search = () => {
  return (
    <Link to="/ ">
        <SearchLogo />
        <span className="on-desktop">Search</span>
    </Link>
  )
}

export default Search
