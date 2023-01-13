import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { ArticleCard } from "./ArticleCard";

export const ArticleList = ({topic}) => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [sortBy, setSortBy] = useState('created_at');
    const [order, setOrder] = useState('DESC');


    useEffect(() => {
        getArticles(sortBy, order, topic)
        .then((articleArray) => {
            setArticles(articleArray)
            setIsLoading(false)
        })
    }, [setArticles, setIsLoading, sortBy, order, topic])

    if (isLoading) {
        return <div>Loading...</div>
    }


    return (
        <div className="article-list">
        <select name="select-sort-by" id="select-sort-by" onChange={(event) => setSortBy(event.target.value)}>
            <option value='created_at' default>Sort By</option>
            <option value='created_at' key='created_at'>Date</option>
            <option value='article_id' key='article_id'>Article ID</option>
            <option value='votes' key='votes'>Votes</option>
            <option value='comment_count' key='comment_count'>Number of Comments</option>
        </select>
        <select name="select-order" id="select-order" onChange={(event) => setOrder(event.target.value)}>
            <option value='DESC' default>Order</option>
            <option value='DESC' key='DESC'>Descending</option>
            <option value='ASC' key='ASC'>Ascending</option>
        </select>
          <ul>
            {articles.map((article) => {
               return <ArticleCard key={article.article_id} {...article}/>;
            })}
          </ul>
        </div>
    )
}


