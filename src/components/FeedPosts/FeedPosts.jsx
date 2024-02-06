import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost'
import Loading from '../Loading/Loading'

const FeedPosts = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        }, 1000)
    }, [])

  return (
    <div>
        {isLoading ? <Loading/> : (
            <>
                <FeedPost img="/images/img1.png" username="username1" avatar="/images/img1.png" avatarSize="sm" />
                <FeedPost img="/images/img2.png" username="username2" avatar="/images/img2.png" avatarSize="sm"/>
                <FeedPost img="/images/img3.png" username="username3" avatar="/images/img3.png" avatarSize="sm"/>
                <FeedPost img="/images/img4.png" username="username4" avatar="/images/img4.png" avatarSize="sm"/>
            </>

        )}

    </div>
  )
}

export default FeedPosts
