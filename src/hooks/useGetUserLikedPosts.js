import {useState } from "react";
import usePostStore from "../store/postStore";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetUserLikedPosts = () => {
    const [gettingLikedPosts, setGettingLikedPosts] = useState(false);
	const { posts, setPosts } = usePostStore();
	const showToast = useShowToast();
	const authUser = useAuthStore((state) => state.user);


    const getLikedPosts = async () => {
        if (!authUser) return showToast("Error","You have to be logged in to see liked posts", "error");
        setGettingLikedPosts(true);
        setPosts([]);

        try {
            const q = query(collection(firestore, "posts"), where("likes", "array-contains", authUser.uid));
            const querySnapshot = await getDocs(q);

            const posts = [];
            querySnapshot.forEach((doc) => {
                posts.push({ ...doc.data(), id: doc.id });
            });

            setPosts(posts);
        } catch (error) {
            showToast("Error", error.message, "error");
            setPosts([]);
        } finally {
            setGettingLikedPosts(false);
        }
    };


	return { gettingLikedPosts, getLikedPosts };
}

export default useGetUserLikedPosts
