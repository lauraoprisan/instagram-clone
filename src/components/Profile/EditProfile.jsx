import { useRef, useState } from 'react'
import Avatar from '../Avatar/Avatar'
import useAuthStore from '../../store/authStore'
import usePreviewImg from '../../hooks/usePreviewImg'
import useEditProfile from '../../hooks/useEditProfile'
import useShowToast from '../../hooks/useShowToast'
import { useNavigate } from "react-router-dom";
import ModalTest from '../Modal/ModalTest'

const EditProfile = ({open,onClose}) => {
    const authUser = useAuthStore(state=>state.user)
    const [inputs,setInputs] = useState({
        fullName: authUser?.fullName,
        username: authUser?.username,
        bio:authUser?.bio || "",
    })

    const fileRef = useRef(null)
    const {handleImageChange, selectedFile, setSelectedFile} = usePreviewImg()
    const {isUpdating, editProfile} = useEditProfile()
    const showToast = useShowToast()
    const navigate = useNavigate();

    const handleEditProfile = async()=>{
        if(!inputs.fullName || !inputs.username){
            showToast("Error", "You must have a fullname and an username", "error")
            return
        }
        try {

            await editProfile(inputs, selectedFile)
            setSelectedFile(null)
            onClose()
            navigate(`/${inputs.username}`);

        } catch (error) {
            showToast("Error", error.message, "error")
        }
    }

  return (
    <ModalTest isOpen={open} onClose={onClose}>
        <div className="edit-profile-modal-content ">
            <h1>Edit Profile</h1>
            <div className="flex user-snippet">
                <Avatar key={selectedFile || authUser.profilePicURL} avatar={selectedFile || authUser.profilePicURL} size="xlg"></Avatar>
                <button onClick={()=> fileRef.current.click()}>
                    Edit Profile Picture
                </button>
                <input type="file" hidden ref={fileRef} onChange = {handleImageChange}/>
            </div>
            <form className="edit-profile-form" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label>Full name</label>
                    <input type="text" placeholder='Full name'
                        value={inputs.fullName}
                        onChange={(e)=>setInputs({...inputs, fullName:e.target.value})}
                    />
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" placeholder='Username'
                        value={inputs.username}
                        onChange={(e)=>setInputs({...inputs, username:e.target.value})}
                    />
                </div>
                <div>
                    <label>Bio</label>
                    <input type="text" placeholder='Bio'
                        value={inputs.bio}
                        onChange={(e)=>{
                            setInputs({...inputs, bio:e.target.value})
                        }
                        }
                    />
                </div>
                <div className="edit-form-buttons-container">
                    <button className="cancel-edit" onClick={onClose}>Cancel</button>
                    <button  className="save-edit" onClick={handleEditProfile}>Save</button>
                </div>
            </form>
        </div>
    </ModalTest>
  )
}

export default EditProfile
