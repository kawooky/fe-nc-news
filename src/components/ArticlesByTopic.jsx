import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../api";
import { ArticleCard } from "./ArticleCard";



export const ArticlesByTopic = () => {
    const {topic} = useParams();
    const [articlesByTopic, setArticlesByTopic] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        getArticlesByTopic(topic)
        .then((articleArray) => {
            setArticlesByTopic(articleArray)
            setIsLoading(false)
        })
    }, [setArticlesByTopic, setIsLoading, topic])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="article-list">
            <h3>Articles with topic {topic}:</h3>
          <ul>
            {articlesByTopic.map((article) => {
               return <ArticleCard key={article.article_id} {...article}/>;
            })}
          </ul>
        </div>
    )

}