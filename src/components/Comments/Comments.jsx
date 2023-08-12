import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../../api";
import { AddComment } from "../AddComment/AddComment";
import { CommentCard } from "../CommentCard/CommentCard";
import styles from './Comments.module.css'

export const Comments = ({articleId, username}) => {
    const [comments, setComments] = useState([])
    const [deletedCommentId, setDeletedCommentId] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCommentsByArticleId(articleId).then((commentData) => {
            setComments(commentData)
            setIsLoading(false)
        })
    }, [articleId, deletedCommentId])

    if (isLoading) {
        return <div className={styles.loading}>Loading...</div>
    }

    return (
        <div className={styles.comments}>
            <AddComment article_id={articleId} setComments={setComments} username={username}/>

            <h2 className={styles.commentsText}>Comments Section:</h2>
            <div className={styles.commentList}>
            {comments.map((comment) => {
               return <CommentCard username={username} comment_id={comment.comment_id} body={comment.body} votes={comment.votes} author={comment.author} created_at={comment.created_at} deletedCommentId={deletedCommentId} setDeletedCommentId={setDeletedCommentId}/>;
            })}

            </div>

            
        </div>

    )
}

