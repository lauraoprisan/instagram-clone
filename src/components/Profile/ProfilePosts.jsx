import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import ProfilePost from './ProfilePost'
import useGetUserPosts from '../../hooks/useGetUserPosts';

const ProfilePosts = () => {

    const { isLoading, posts } = useGetUserPosts();

	const noPostsFound = !isLoading && posts.length === 0;
	if (noPostsFound) return <NoPostsFound />;

    return (
        <>

        <div className="profile-posts">
            {isLoading &&<Loading/>}

            {!isLoading && (
				<>
					{posts.map((post) => (
						<ProfilePost post={post} key={post.id} />
					))}
				</>
			)}
        </div>

        </>



    )
}

export default ProfilePosts

const NoPostsFound = () => {
	return (
		<div>
            No posts found
        </div>
	);
};