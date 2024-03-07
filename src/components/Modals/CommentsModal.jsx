import { useEffect, useRef, useState } from 'react'
import Modal from '../Modal/Modal'
import Comment from '../Comment/Comment'
import usePostComment from '../../hooks/usePostComment'

const CommentsModal = ({isOpen, onClose, post}) => {
    const [comment, setComment] = useState("")
    const {isCommenting, handlePostComment} = usePostComment()
    const commentsContainerRef = useRef(null)


    const handleSubmitComment = async () => {
        await handlePostComment(post.id,comment)
        setComment("")
    }

    //adjust the scroll so you can always see the last comm (on mount aka on the first render and after a new comm is added)
    useEffect(()=>{
        const scrollToBottom = () => {
            commentsContainerRef.current.scrollTop = commentsContainerRef.current.scrollHeight
        }
        if(isOpen){
            //we use setTimeout because on the mount, react does not see scrollHeight
            setTimeout(()=>{
                scrollToBottom()
            },200)

        }

    },[isOpen,post.comments.length])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <div className="vertical-modal">
            <h3>Comments</h3>
            <div className="all-comments" ref={commentsContainerRef}>
                {post.comments.map((comment, index) => (
                    <Comment key={index} comment={comment}/>
                ))}

            </div>
            <input type="text" placeholder="Write your comment..." value={comment} onChange={(e)=>setComment(e.target.value)}/>
            <button className="modal-action-btn" onClick={handleSubmitComment} disabled={!comment}>Post</button>
        </div>
    </Modal>
  )
}

export default CommentsModal
