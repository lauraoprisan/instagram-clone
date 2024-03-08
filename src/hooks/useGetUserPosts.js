import { useEffect, useState } from "react";
import usePostStore from "../store/postStore";
import useShowToast from "./useShowToast";
import useUserProfileStore from "../store/userProfileStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetUserPosts = () => {
	const [isGettingPosts, setIsGettingPost] = useState(true);
	const { posts, setPosts } = usePostStore();
	const showToast = useShowToast();
	const userProfile = useUserProfileStore((state) => state.userProfile);

	const getPosts = async () => {
		if (!userProfile) return;
		setIsGettingPost(true);
		setPosts([]);

		try {
			const q = query(collection(firestore, "posts"), where("createdBy", "==", userProfile.uid));
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
			setIsGettingPost(false);
		}
	};

	useEffect(() => {
		getPosts();
	}, [userProfile, showToast]);


	return { isGettingPosts, getPosts };
};

export default useGetUserPosts;