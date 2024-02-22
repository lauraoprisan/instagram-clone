import React from 'react'
import ReactDom from'react-dom'
import { IoClose } from "react-icons/io5";


const Modal = ({open,children, onClose, img, forComponent}) => {

    if(!open) return null

    return ReactDom.createPortal (
        <>
            <div className="overlay-outside-modal"></div>
            <div className={forComponent == "editProfile" ? "modal flex edit-mode modal-layout":"modal flex modal-layout "}>

            {forComponent == "searchUser" && (
                <div className=" search-user-modal">
                    {children}
                    <button className="modal-close-button close-edit" onClick={onClose}>
                            <IoClose size={20}/>
                    </button>
                </div>
            )}

            {forComponent == "editProfile" && (
                <div className="modal-for-editProfile-container">
                    {children}
                    <button className="modal-close-button close-edit" onClick={onClose}>
                            <IoClose size={20}/>
                    </button>
                </div>
            )}



            </div>
        </>,
        document.getElementById('portal')

    )
}

export default Modal
