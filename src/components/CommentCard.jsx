import { DeleteButton } from "./DeleteButton";
import { useState } from "react";

export const CommentCard =({username, comment_id, body, votes, author, created_at, deletedCommentId, setDeletedCommentId}) => {
    const [err, setErr] = useState(null);


    if (err) return (
        <div className='comment-card'>
            <h3>{err}</h3>
        </div>)

    if(deletedCommentId === comment_id) {
        return (
            <div className='comment-card'>
                <h3>Comment Deleted</h3>
            </div>
        )
    }


    return (
        <div className='comment-card'>
            <h3>Author: {author}</h3>
            <h4>{body}</h4>
            <p>Votes: {votes}</p>
            <p>Created At:{created_at}</p>
            {username === author? <DeleteButton comment_id={comment_id} deletedCommentId={deletedCommentId} setDeletedCommentId={setDeletedCommentId} err={err} setErr={setErr}/> : <p></p>}
            <p>{err ? err : ''}</p>

        </div>
    )
}
