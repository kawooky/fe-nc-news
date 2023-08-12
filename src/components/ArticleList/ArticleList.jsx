import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import { ArticleCard } from "../ArticleCard/ArticleCard";
import styles from './ArticleList.module.css'
import { Filters } from "../Filters/Filters";

export const ArticleList = ({topic, sortBy, order, setTopic, setSortBy, setOrder}) => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        getArticles(sortBy, order, topic)
        .then((articleArray) => {
            setArticles(articleArray)
            setIsLoading(false)
        })
    }, [setArticles, setIsLoading, sortBy, order, topic])

    if (isLoading) {
        return <div className={styles.loading}>Loading...</div>
    }


    return (
        <div className={styles.articleList}>
            <Filters setTopic={setTopic} setSortBy={setSortBy} setOrder={setOrder}/>
            {articles.map((article) => {
               return <ArticleCard key={article.article_id} {...article} />;
            })}
        </div>
    )
}


