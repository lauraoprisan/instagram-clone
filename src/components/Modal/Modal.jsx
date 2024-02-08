import React from 'react'
import ReactDom from'react-dom'
import { IoClose } from "react-icons/io5";


const Modal = ({open,children, onClose, img}) => {

    if(!open) return null
    console.log(children)
    return ReactDom.createPortal (
        <>
            <div className="overlay-outside-modal"></div>
            <div className="modal flex modal-layout">
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
            </div>
        </>,
        document.getElementById('portal')

    )
}

export default Modal
