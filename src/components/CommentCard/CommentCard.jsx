import { DeleteButton } from "../DeleteButton/DeleteButton";
import { useState } from "react";
import styles from './CommentCard.module.css'

export const CommentCard =({username, comment_id, body, votes, author, created_at, deletedCommentId, setDeletedCommentId}) => {
    const [err, setErr] = useState(null);

    let date = new Date(created_at).toLocaleString("en-GB", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
    });


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
        <div className={styles.commentCard}>
            <h3>Author: {author}</h3>
            <h4>{body}</h4>
            <div className={styles.votesAndDate}>
            <p>Votes: {votes}</p>
            <p>{date}</p>
            </div>
            {username === author? <DeleteButton comment_id={comment_id} deletedCommentId={deletedCommentId} setDeletedCommentId={setDeletedCommentId} err={err} setErr={setErr}/> : <p></p>}
            <p>{err ? err : ''}</p>

        </div>
    )
}
