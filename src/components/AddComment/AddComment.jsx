import { useState } from "react"
import { postComment } from "../../api"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import styles from './AddComment.module.css'

export const AddComment = ({article_id, setComments, username}) => {

    const [commentText, setCommentText] = useState ('')
    const [err, setErr] = useState(null);


    const handleSubmit = (event) => {
        event.preventDefault()
        if (username !== '') {

            setErr(null)
            postComment(article_id, commentText, username)
            .then((newComment) => {
                setComments((currentComments)=> [newComment,...currentComments])
                setCommentText('')
            }).catch((err) => {
                setErr('oops something went wrong')
            })
        } else {
            setErr ('First select a username in the header')
        }
    }

    return (
        <div className={styles.addComment}>
            <form onSubmit={handleSubmit}>
                <input className={styles.addCommentBox} type="text" placeholder="Write a comment..." value={commentText} name="commentText" onChange={(event) => setCommentText(event.target.value)
        }/>

        <button className={styles.sendButton} type='submit'><FontAwesomeIcon icon={faPaperPlane} size='2xl'/></button>
            </form>
            <p>{err ? err : ''}</p>

        </div>
    )
}