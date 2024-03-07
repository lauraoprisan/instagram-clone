import React from 'react'
import ReactDom from'react-dom'
import { IoClose } from "react-icons/io5";


const Modal = ({isOpen, onClose, children}) => {

    if(!isOpen) return null

    return ReactDom.createPortal (
        <>
            <div className="overlay-outside-modal">
            </div>
            <div className="modal-test profile-post-modal">
                {children}
                <button
                    className="modal-close-button-test"
                    onClick={onClose}
                >
                    <IoClose size={20}/>
                </button>
            </div>
        </>,
        document.getElementById('portal')

    )
}

export default Modal
