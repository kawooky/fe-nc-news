import { useState } from "react"
import { postComment } from "../api"


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
            }).catch((err) => {
                setErr('oops something went wrong')
            })
        } else {
            setErr ('First select a username in the header')
        }
    }

    return (
        <div className="add-comment">
            <form onSubmit={handleSubmit}>
                <input className='add-comment-box' type="text" placeholder="Write a comment..." value={commentText} name="commentText" onChange={(event) => setCommentText(event.target.value)
        }/>
                <input type="submit"/>
            </form>
            <p>{err ? err : ''}</p>

        </div>
    )
}