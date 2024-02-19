import { useRef, useState } from 'react'
import { CreatePostLogo } from "../../assets/constants";
import Modal from '../Modal/Modal';
import { BsFillImageFill } from "react-icons/bs";
import usePreviewImg from '../../hooks/usePreviewImg';
import { IoClose } from "react-icons/io5";
import useShowToast from '../../hooks/useShowToast';
import { addDoc, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore';
import { firestore, storage } from '../../firebase/firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import usePostStore from '../../store/usePostStore';
import useAuthStore from '../../store/authStore';
import useUserProfileStore from '../../store/userProfileStore';
import { useLocation } from "react-router-dom";

const CreatePost = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
  const [caption, setCaption] = useState("");
	const imageRef = useRef(null);
  const showToast = useShowToast();
	const { isLoading, handleCreatePost } = useCreatePost();

  const handlePostCreation = async (e) => {
    e.preventDefault()
		try {
			await handleCreatePost(selectedFile, caption);
			setIsOpen(false);
			setCaption("");
			setSelectedFile(null);
		} catch (error) {
			showToast("Error", error.message, "error");
		}
	};

  return (
    <>
      <div className="sidebar-item" onClick={()=>setIsOpen(true)}>
          <CreatePostLogo />
          <span className="on-desktop">Create</span>

      </div>

      {isOpen && (
        <Modal open={isOpen} onClose={()=>setIsOpen(false)} forComponent="searchUser">
          <div className="search-user-modal-container">
            <h3>Create a post</h3>
            <form className="search-user-form">
              <input type="text"
                placeholder="Add a description..."
                onChange={(e)=>setCaption(e.target.value)}
                calue={caption}
              />
              <input type='file'
                hidden
                ref={imageRef}
                onChange={handleImageChange}
              />
              <div className="img-preview-container-icon">
                <BsFillImageFill
                  size={16}
                  onClick={()=>imageRef.current.click()}
                  />
                  {selectedFile &&(
                     <i className="cancel-img" onClick={()=>{setSelectedFile(null)}}>
                        <IoClose/>
                     </i>
                  )}
              </div>


              {selectedFile &&(
                <div className="img-preview-container">
                  <img src={selectedFile} alt="Selected img" />
                </div>
              )}

              <button onClick={handlePostCreation} >
                Post
              </button>
            </form>
          </div>
        </Modal>
      )}
    </>

  )
}

export default CreatePost


function useCreatePost() {
	const showToast = useShowToast();
	const [isLoading, setIsLoading] = useState(false);
	const authUser = useAuthStore((state) => state.user);
	const createPost = usePostStore((state) => state.createPost);
	const addPost = useUserProfileStore((state) => state.addPost);
	const userProfile = useUserProfileStore((state) => state.userProfile);
	const { pathname } = useLocation();

	const handleCreatePost = async (selectedFile, caption) => {
		if (isLoading) return;
		if (!selectedFile) throw new Error("Please select an image");
		setIsLoading(true);
		const newPost = {
			caption: caption,
			likes: [],
			comments: [],
			createdAt: Date.now(),
			createdBy: authUser.uid,
		};

		try {
			const postDocRef = await addDoc(collection(firestore, "posts"), newPost);
			const userDocRef = doc(firestore, "users", authUser.uid);
			const imageRef = ref(storage, `posts/${postDocRef.id}`);

			await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) });
			await uploadString(imageRef, selectedFile, "data_url");
			const downloadURL = await getDownloadURL(imageRef);

			await updateDoc(postDocRef, { imageURL: downloadURL });

			newPost.imageURL = downloadURL;

			if (userProfile.uid === authUser.uid) createPost({ ...newPost, id: postDocRef.id });

			if (pathname !== "/" && userProfile.uid === authUser.uid) addPost({ ...newPost, id: postDocRef.id });

			showToast("Success", "Post created successfully", "success");
		} catch (error) {
			showToast("Error", error.message, "error");
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, handleCreatePost };
}