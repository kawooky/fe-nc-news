import {Link} from "react-router-dom";

export const CommentCard =({comment_id, body, votes, author, created_at}) => {
    return (
        <div className='comment-card'>
            <h3>Author: {author}</h3>
            <h4>{body}</h4>
            <p>Votes: {votes}</p>
            <p>Created At:{created_at}</p>
        </div>
    )
}
