import { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import Modal from '../Modal/Modal'
import Avatar from '../Avatar/Avatar'
import Comment from '../Comment/Comment'
import PostFooter from '../FeedPosts/PostFooter'
import useUserProfileStore from '../../store/userProfileStore'
import useAuthStore from '../../store/authStore'
import useShowToast from '../../hooks/useShowToast'
import {firestore, storage} from '../../firebase/firebase'
import { arrayRemove, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { deleteObject, ref } from "firebase/storage";
import usePostStore from '../../store/postStore'
import Caption from '../Comment/Caption'

const ProfilePost = ({post}) => {

    const [isOpen, setIsOpen] = useState(false)
    const userProfile = useUserProfileStore(state=>state.userProfile)
    const authUser = useAuthStore(state=>state.user)
    const showToast = useShowToast()
    const [isDeleting, setIsDeleting] = useState(false)
    const deletePost = usePostStore(state=>state.deletePost)
    const decrementPostsCount = useUserProfileStore(state=>state.deletePost)

    const handleDeletePost = async () => {
        if(!window.confirm("Are you sure you want to delete this post?")) return
        if(isDeleting) return //so that you cannot click the same button again and do stuff over other stuff
        try {
            console.log("from try delete post")

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
        <Modal open={isOpen} onClose={()=> setIsOpen(false)} img={post.imageURL} forComponent="profilePost">
            <div className="modal-header">
                <Avatar size="sm" avatar={userProfile.profilePicURL}/>
                <span className="username">{userProfile.username}</span>

               {authUser?.uid === userProfile.uid &&(
                 <span className="delete-post-button" onClick={handleDeletePost}>
                    <MdDelete size="20"/>
                 </span>
               )}
            </div>
            <div className="profile-post-info">
                {/* caption */}
                {[post.caption && <Caption post={post}/>]}
                {/* comments */}
                <div className="comments">
                    {post.comments.map(comment=>
                        <Comment
                            key={comment.id}
                            comment={comment}
                    />)}
                </div>
                <div className="profile-post-footer">
                    <PostFooter post={post} isProfilePage={true}/>
                </div>
            </div>

        </Modal>
    </div>
  )
}

export default ProfilePost
