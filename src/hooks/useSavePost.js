import { useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useSavePost = (post) => {
    const [isSaving, setIsSaving] = useState(false)
    const authUser = useAuthStore((state)=>state.user)
    const [isSaved, setIsSaved] = useState(post.savedBy.includes(authUser?.uid))
    const showToast = useShowToast()


    const handleSavePost = async()=>{
        if(isSaving) return
        if(!authUser) return  showToast("Error", "You must be logged in to save a post", "error")
        setIsSaving(true)

        try {
            const postRef = doc(firestore,"posts",post.id)
            await updateDoc(postRef,{
                savedBy: isSaved ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid),
            })

            setIsSaved(!isSaved)

        } catch (error) {
            showToast("Error", error.message, "error")
        } finally{
            setIsSaving(false)
        }
    }


    return {isSaved, handleSavePost, isSaving};
}

export default useSavePost;
