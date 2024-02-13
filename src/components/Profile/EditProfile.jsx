import React from 'react'
import Modal from '../Modal/Modal'
import { Avatar } from '@chakra-ui/react'

const EditProfile = ({open,onClose}) => {
  return (
    <Modal open={open} onClose={onClose} forComponent="editProfile">
        <div className="edit-profile-modal-content">
            <h1>Edit Profile</h1>
            <div className="flex user-snippet">
                <Avatar avatar="/images/img3.png" size="lg"></Avatar>
                <button>
                    Edit Profile Picture
                </button>
            </div>
            <form className="edit-profile-form">
                <div>
                    <label>Full name</label>
                    <input type="text" placeholder='Full name'/>
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" placeholder='Username'/>
                </div>
                <div>
                    <label>Bio</label>
                    <input type="text" placeholder='Bio'/>
                </div>
                <div className="edit-form-buttons-container">
                    <button className="cancel-edit">Cancel</button>
                    <button  className="save-edit">Save</button>
                </div>
            </form>
        </div>
    </Modal>
  )
}

export default EditProfile
