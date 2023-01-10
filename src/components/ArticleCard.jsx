import { useState } from "react";
import {Link} from "react-router-dom";
import { VoteButtons } from "./VoteButtons";

export const ArticleCard = ({article_id, title, topic, author, body, created_at, votes, comment_count}) => {

    const [incVotes, setIncVotes] = useState(0)

    let props = {article_id:article_id, incVotes:incVotes, setIncVotes:setIncVotes}


    return (
        
        <article className='article-card'>
            <Link to={`/articles/${article_id}`}>
            <h2>{title}</h2>
            </Link>
            <h3>Topic: {topic}</h3>
            <h3>Author: {author}</h3>
            <h4>Body: {body}</h4>
            <p>Created At: {created_at}</p>
            <p>Votes: {votes+incVotes}</p>
            <VoteButtons {...props}/>
            <p>Comment Count: {comment_count}</p>
        </article>
        
    )
}


