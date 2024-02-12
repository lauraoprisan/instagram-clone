import React from 'react'
import { InstagramLogo } from '../../assets/constants'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="auth-navbar">
        <Link to="/" className="on-desktop">
            <InstagramLogo/>
        </Link>
      <ul>
        <li>
            <Link to="/auth">
                <button className="nav-login">Log in</button>
            </Link>
        </li>
        <li>
            <Link to="/auth">
                <button className="nav-signin">Sign up</button>
            </Link>
        </li>
    </ul>
    </nav>
  )
}

export default Navbar
