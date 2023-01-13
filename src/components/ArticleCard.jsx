import { useState } from "react";
import {Link} from "react-router-dom";
import { VoteButtons } from "./VoteButtons";

export const ArticleCard = ({article_id, title, topic, author, body, created_at, votes, comment_count}) => {

    const [incVotes, setIncVotes] = useState(0)

    let props = {article_id:article_id, incVotes:incVotes, setIncVotes:setIncVotes}

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

    return (
        
        <article className='article-card'>
            <div className="votes">
                <VoteButtons {...props}/>
            <p>&nbsp; {votes+incVotes}</p>
            </div>
            <div className='article-info'>
            <Link to={`/articles/${article_id}`}>
            <h2>{title}</h2>
            </Link>
            <h3>Topic: {topic}</h3>
            <h3>Author: {author}</h3>
            <h4>Body: {body}</h4>
            <p>Created At: {date}</p>
            
            
            <p>Comment Count: {comment_count}</p>
            </div>


        </article>
        
    )
}


