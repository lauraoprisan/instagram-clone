import { useRef, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import useUserProfileStore from '../../store/userProfileStore'
import useAuthStore from '../../store/authStore'
import useShowToast from '../../hooks/useShowToast'
import {firestore, storage} from '../../firebase/firebase'
import { arrayRemove, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { deleteObject, ref } from "firebase/storage";
import usePostStore from '../../store/postStore'
import ProfilePostModal from '../Modals/ProfilePostModal'

const ProfilePost = ({post}) => {

    const [isOpen, setIsOpen] = useState(false)
    const userProfile = useUserProfileStore(state=>state.userProfile)
    const authUser = useAuthStore(state=>state.user)
    const showToast = useShowToast()
    const [isDeleting, setIsDeleting] = useState(false)
    const deletePost = usePostStore(state=>state.deletePost)
    const decrementPostsCount = useUserProfileStore(state=>state.deletePost)
    const commentsContainerRef = useRef(null)
console.log("post from saved",post)
    const handleDeletePost = async () => {
        if(!window.confirm("Are you sure you want to delete this post?")) return
        if(isDeleting) return //so that you cannot click the same button again and do stuff over other stuff
        try {
            const imageRef = ref(storage, `posts/${post.id}`)
            await deleteObject(imageRef)
            const userRef= doc(firestore,"users", authUser.uid)
            await deleteDoc(doc(firestore,"posts", post.id))

            await updateDoc(userRef,{
                posts:arrayRemove(post.id),
            })

            deletePost(post.id)
            decrementPostsCount(post.id)
            showToast("Success", "Post deleted succesfully", "success")
        } catch (error) {
            showToast("Error", error.message, "error")
        } finally {
            setIsDeleting(false)
        }
    }


  return (
    <div className="wrapper-test">
        <div  className="profile-post-image-container" onClick={()=> setIsOpen(true)}>
            <img src={post.imageURL} alt="" />
            <div className="image-hover-layer flex">
                <div>
                    <AiFillHeart/>
                    <span>{post.likes.length}</span>
                </div>
                <div>
                    <FaComment/>
                    <span>{post.comments.length}</span>
                </div>

            </div>
        </div>
        <ProfilePostModal isOpen={isOpen} onClose={()=>setIsOpen(false)} post={post} handleDeletePost={handleDeletePost}/>
    </div>
  )
}

export default ProfilePost
