import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { getArticlesById } from '../../api';
import { Comments } from '../Comments/Comments';
import { VoteButtons } from '../VoteButtons/VoteButtons';
import styles from './SingleArticle.module.css'
import { ArticleCard } from '../ArticleCard/ArticleCard';


export const SingleArticle = ({username}) => {
    const [singleArticle, setSingleArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const {articleId} = useParams();
    const [incVotes, setIncVotes] = useState(0)
    let props = {article_id:singleArticle.article_id, incVotes:incVotes, setIncVotes:setIncVotes}

    useEffect(()=>{
        getArticlesById(articleId).then((articleData) => {
            setSingleArticle(articleData)
            setIsLoading(false)
        })
    }, [articleId])

    if (isLoading) {
        return <div className={styles.loading}>Loading...</div>
    }

    let date = new Date(singleArticle.created_at).toLocaleString("en-GB", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
    });

    // {article_id, title, topic, author, body, created_at, votes, comment_count}) 
    return (
        <>
            <div className={styles.singleArticle}>

            {/* <div className="votes">
                <VoteButtons {...props}/>
            <p>&nbsp; {singleArticle.votes+incVotes}</p>
            </div>

            <div className='article-info'>
            <h2>{singleArticle.title}</h2>
            <h3>Topic: {singleArticle.topic}</h3>
            <h3>Author: {singleArticle.author}</h3>
            <h4>{singleArticle.body}</h4>
            <p>Created At: {date}</p>
            <p>Comment Count: {singleArticle.comment_count}</p>
            </div> */}
            <ArticleCard {...singleArticle} />

        </div>
            <Comments articleId={articleId} username={username}/>
        </>


    )
}