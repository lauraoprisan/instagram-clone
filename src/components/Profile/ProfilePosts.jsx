import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import ProfilePost from './ProfilePost'

const ProfilePosts = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        }, 2000)
    },[])

    return (
        <>

        <div className="profile-posts">
            {isLoading ? <Loading/> : (
                <>
                    <ProfilePost img="/images/img1.png"/>
                    <ProfilePost img="/images/img2.png"/>
                    <ProfilePost img="/images/img3.png"/>
                    <ProfilePost img="/images/img4.png"/>
                </>
            )}
        </div>

        </>



    )
}

export default ProfilePosts
