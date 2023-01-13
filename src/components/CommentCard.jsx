import { DeleteButton } from "./DeleteButton";

export const CommentCard =({username, comment_id, body, votes, author, created_at}) => {

    

    return (
        <div className='comment-card'>
            <h3>Author: {author}</h3>
            <h4>{body}</h4>
            <p>Votes: {votes}</p>
            <p>Created At:{created_at}</p>
            {username === author? <DeleteButton comment_id={comment_id}/> : <p></p>}

        </div>
    )
}
