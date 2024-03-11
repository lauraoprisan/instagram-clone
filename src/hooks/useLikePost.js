import { useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useLikePost = (post) => {
	const [isUpdating, setIsUpdating] = useState(false);
	const authUser = useAuthStore((state) => state.user);
	const [likes, setLikes] = useState(post.likes.length);
	const [isLiked, setIsLiked] = useState(post.likes.includes(authUser?.uid));
	const showToast = useShowToast();

	const handleLikePost = async () => {
		if (isUpdating) return;
		if (!authUser) return showToast("Error", "You must be logged in to like a post", "error");
		setIsUpdating(true);

		try {
			const postRef = doc(firestore, "posts", post.id);
			const postSnap = await getDoc(postRef);
			const postData = postSnap.data();
			console.log(postData)

			// await updateDoc(postRef, {
			// 	likes: isLiked ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid),
			// });

			if(isLiked){
				postData.likes = post.likes.filter(item=>item!=authUser.uid)
				postData.likesInfo = postData.likes.filter((obj) => obj.user !== authUser.uid);
			} else {
				postData.likes.push(authUser.uid)
				postData.likesInfo.push({user:authUser.uid,date:Date.now()})

			}

			await updateDoc(postRef, postData);

			setIsLiked(!isLiked);
			isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
		} catch (error) {
			showToast("Error", error.message, "error");
		} finally {
			setIsUpdating(false);
		}
	};

	return { isLiked, likes, handleLikePost, isUpdating };
};

export default useLikePost;