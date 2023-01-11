import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";
import { AddComment } from "./AddComment";
import { CommentCard } from "./CommentCard";

export const Comments = ({articleId, username}) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCommentsByArticleId(articleId).then((commentData) => {
            setComments(commentData)
            setIsLoading(false)
        })
    }, [articleId])

    if (isLoading) {
        return <div>Loading...</div>
    }

    
    return (
        <div className='comments'>
            <AddComment article_id={articleId} setComments={setComments} username={username}/>

            <h2>Comments Section:</h2>
            <ul>
            {comments.map((comment) => {
               return <CommentCard key={comment.comment_id} {...comment} />;
            })}
             </ul>
        </div>

    )
}

