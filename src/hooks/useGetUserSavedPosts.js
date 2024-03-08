import {useState } from "react";
import usePostStore from "../store/postStore";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";


const useGetUserSavedPosts = () => {
    const [gettingSavedPosts, setGettingSavedPosts] = useState(false);
	const { posts, setPosts } = usePostStore();
	const showToast = useShowToast();
	const authUser = useAuthStore((state) => state.user);


    const getSavedPosts = async () => {
        if (!authUser) return showToast("Error","You have to be logged in to see saved posts", "error");
        setGettingSavedPosts(true);
        setPosts([]);

        try {
            const q = query(collection(firestore, "posts"), where("savedBy", "array-contains", authUser.uid));
            const querySnapshot = await getDocs(q);

            const posts = [];
            querySnapshot.forEach((doc) => {
                posts.push({ ...doc.data(), id: doc.id });
            });

            posts.sort((a, b) => b.createdAt - a.createdAt);
            setPosts(posts);
        } catch (error) {
            showToast("Error", error.message, "error");
            setPosts([]);
        } finally {
            setGettingSavedPosts(false);
        }
    };


	return { gettingSavedPosts, getSavedPosts };
}

export default useGetUserSavedPosts
