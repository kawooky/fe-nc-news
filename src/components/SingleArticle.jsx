import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { getArticlesById } from '../api';


export const SingleArticle = () => {
    const [singleArticle, setSingleArticle] = useState({});
    const {articleId} = useParams();

    useEffect(()=>{
        getArticlesById(articleId).then((articleData) => {
            setSingleArticle(articleData)
        })
    }, [articleId])

    return (
        <div>
            <h2>{singleArticle.title}</h2>
            <h3>Topic: {singleArticle.topic}</h3>
            <h3>Author: {singleArticle.author}</h3>
            <h4>Body: {singleArticle.body}</h4>
            <p>Created At: {singleArticle.created_at}</p>
            <p>Votes: {singleArticle.votes}</p>
            <p>Comment Count: {singleArticle.comment_count}</p>
        </div>
    )
}