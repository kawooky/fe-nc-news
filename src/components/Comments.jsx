import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";
import { AddComment } from "./AddComment";
import { CommentCard } from "./CommentCard";

export const Comments = ({articleId, username}) => {
    const [comments, setComments] = useState([])
    const [deletedCommentId, setDeletedCommentID] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCommentsByArticleId(articleId).then((commentData) => {
            setComments(commentData)
            setIsLoading(false)
        })
    }, [articleId, deletedCommentId])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className='comments'>
            <AddComment article_id={articleId} setComments={setComments} username={username}/>

            <h2>Comments Section:</h2>
            <ul>
            {comments.map((comment) => {
               return <CommentCard key={comment.comment_id} username={username} comment_id={comment.comment_id} body={comment.body} votes={comment.votes} author={comment.author} created_at={comment.created_at} deletedCommentId={deletedCommentId} setDeletedCommentID={setDeletedCommentID}/>;
            })}
             </ul>
        </div>

    )
}

