import { useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { addDoc, arrayRemove, arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useSavePost = (post) => {
    const [isSaving, setIsSaving] = useState(false)
    const authUser = useAuthStore((state)=>state.user)
    const [isSaved, setIsSaved] = useState()
    const showToast = useShowToast()


    const handleSavePost = async()=>{
        if(isSaving) return
        if(!authUser) return  showToast("Error", "You must be logged in to save a post", "error")
        setIsSaving(true)
        const newSave = {
            userWhoSaved: authUser.uid,
            postId: post.id,
            date:Date.now(),
        }

        try {
            const savesRef = collection(firestore, "saves");
            const q = query(savesRef, where("userWhoSaved", "==", authUser.uid), where("postId", "==", post.id))
            const querySnapshot = await getDocs(q);
            console.log(querySnapshot)

            if (!querySnapshot.empty) {
                const docToDelete = querySnapshot.docs[0]; // Assuming there is at most one matching document
                await deleteDoc(docToDelete.ref);
                setIsSaved(true);
            } else {
                setIsSaved(false);

                // Document doesn't exist, so create a new one
                const newSave = {
                    userWhoSaved: authUser.uid,
                    postId: post.id,
                    date: Date.now(),
                };

                const savedPost = await addDoc(collection(firestore, "saves"), newSave);
                }

                // Toggle the isSaved state
                setIsSaved((prevIsSaved) => !prevIsSaved);

        } catch (error) {
            showToast("Error", error.message, "error")
        } finally{
            setIsSaving(false)
        }
    }


    return {isSaved, handleSavePost, isSaving};
}

export default useSavePost;
