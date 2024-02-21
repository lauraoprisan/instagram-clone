import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost'
import Loading from '../Loading/Loading'
import useGetFeedPosts from '../../hooks/useGetFeedPosts'
import { Box, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'

const FeedPosts = () => {

    const {isLoading, posts} = useGetFeedPosts()


    return (
        <>
        {isLoading && (
           [0, 1, 2].map((_, idx) => (
            <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
                <Flex gap='2'>
                    <SkeletonCircle size='10' />
                    <VStack gap={2} alignItems={"flex-start"}>
                        <Skeleton height='10px' w={"200px"} />
                        <Skeleton height='10px' w={"200px"} />
                    </VStack>
                </Flex>
                <Skeleton w={"full"}>
                    <Box h={"400px"}>contents wrapped</Box>
                </Skeleton>
            </VStack>
        ))

        )}
        {!isLoading && posts.length>0 && (
            posts.map(post=>(
                <FeedPost key={post.id} post={post} />
            ))
        )}

        {!isLoading && posts.length==0 && (
            <p>No posts</p>
        )}
        </>

    )
}

export default FeedPosts
