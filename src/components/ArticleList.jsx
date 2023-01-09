import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { ArticleCard } from "./ArticleCard";

export const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles()
        .then((articleArray) => {
            setArticles(articleArray)
        })
    }, [])



    return (
        <div className="article-list">
          <ul>
            {articles.map((article) => {
               return <ArticleCard key={article.article_id} {...article} />;
            })}
          </ul>
        </div>
    )
}


