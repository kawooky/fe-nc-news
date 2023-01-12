import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { ArticleCard } from "./ArticleCard";

export const ArticleList = ({articles, setArticles}) => {


    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        getArticles()
        .then((articleArray) => {
            setArticles(articleArray)
            setIsLoading(false)
        })
    }, [setArticles, setIsLoading])

    if (isLoading) {
        return <div>Loading...</div>
    }

    console.log(articles)

    return (
        <div className="article-list">
          <ul>
            {articles.map((article) => {
               return <ArticleCard key={article.article_id} {...article}/>;
            })}
          </ul>
        </div>
    )
}


