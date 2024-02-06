import React from 'react'
import Home from './Home'
import Search from './Search'
import Notification from './Notification'
import CreatePost from './CreatePost'
import ProfileLink from './ProfileLink'


const SidebarItems = () => {

  return (
    <>
        <Home/>
        <Search/>
        <Notification/>
        <CreatePost/>
        <ProfileLink/>
    </>
  )
}

export default SidebarItems
