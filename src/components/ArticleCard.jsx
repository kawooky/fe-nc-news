import {Link} from "react-router-dom";

export const ArticleCard = ({article_id, title, topic, author, body, created_at, votes, comment_count}) => {
    return (
        
        <article className='article-card'>
            <Link to={`/${article_id}`}>
            <h2>{title}</h2>
            </Link>
            <h3>Topic:{topic}</h3>
            <h3>Author:{author}</h3>
            <h4>Body: {body}</h4>
            <p>Created At:{created_at}</p>
            <p>Votes:{votes}</p>
            <p>Comment Count: {comment_count}</p>
        </article>
        
    )
}


