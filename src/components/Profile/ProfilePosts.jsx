import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import ProfilePost from './ProfilePost'
import usePostStore from '../../store/postStore';

const ProfilePosts = ({postsAreLoading}) => {


    const { posts, setPosts } = usePostStore();

	const noPostsFound = !postsAreLoading && posts.length === 0;
	if (noPostsFound) return <NoPostsFound />;

    return (
        <>

        <div className="profile-posts">
            {postsAreLoading &&<Loading/>}

            {!postsAreLoading && (
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