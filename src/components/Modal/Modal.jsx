import React from 'react'
import ReactDom from'react-dom'
import { IoClose } from "react-icons/io5";


const Modal = ({open,children, onClose, img, forComponent}) => {

    if(!open) return null
    console.log(children)
    return ReactDom.createPortal (
        <>
            <div className="overlay-outside-modal"></div>
            <div className={forComponent == "editProfile" ? "modal flex modal-layout edit-mode":"modal flex modal-layout"}>

            {forComponent == "editProfile" && (
                <div className="modal-for-editProfile-container">
                    {children}
                    <button className="modal-close-button close-edit" onClick={onClose}>
                            <IoClose size={20}/>
                    </button>
                </div>
            )}

            {forComponent == "profilePost" && (
                <>
                    <div className="modal-img-container">
                        <img  src={img} alt="" />
                    </div>
                    <div className="modal-right-content">
                        <div className="modal-data">
                            {children}
                        </div>
                        <button className="modal-close-button" onClick={onClose}>
                            <IoClose size={20}/>
                        </button>
                    </div>
                </>
            )}

            </div>
        </>,
        document.getElementById('portal')

    )
}

export default Modal
