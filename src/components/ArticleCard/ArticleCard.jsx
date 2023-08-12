import { useState } from "react";
import {Link} from "react-router-dom";
import { VoteButtons } from "../VoteButtons/VoteButtons";
import styles from './ArticleCard.module.css'

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
        
        <div className={styles.articleCard}>
            <div className="votes">
                <VoteButtons {...props}/>
            <p>&nbsp; {votes+incVotes}</p>
            </div>
            <Link to={`/articles/${article_id}`}  className={styles.link}>
            <div className='article-info'>
                <div className={styles.titleAndTopic}>
                    <h2>{title}</h2>
                    <h3>({topic})</h3>
                </div>
            <h3>Author: {author}</h3>
            <h4>{body}</h4>
            <div className={styles.commentsAndDate}>
            <p>Comments: {comment_count}</p>
            <p>{date}</p>
            </div>
            </div>

            </Link>

        </div>
        
    )
}


