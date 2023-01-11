import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { getArticlesById } from '../api';
import { Comments } from './Comments';
import { VoteButtons } from './VoteButtons';


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
        return <div>Loading...</div>
    }

    return (
        <>
            <div className='single-article-info'>
            <h2>{singleArticle.title}</h2>
            <h3>Topic: {singleArticle.topic}</h3>
            <h3>Author: {singleArticle.author}</h3>
            <h4>Body: {singleArticle.body}</h4>
            <p>Created At: {singleArticle.created_at}</p>
            <p>Votes: {singleArticle.votes+ incVotes}</p>
            <p>Comment Count: {singleArticle.comment_count}</p>
            <VoteButtons {...props}/>
        </div>
            <Comments articleId={articleId} username={username}/>
        </>


    )
}