import { useParams } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";



export const ArticlesByTopic = ({articles}) => {
    const {topic} = useParams();


    const filteredArticles = articles.filter((article) => {
        return article.topic === topic
    })

    console.log(filteredArticles)

    return (
        <div className="article-list">
            <h3>Articles with topic {topic}:</h3>
          <ul>
            {filteredArticles.map((article) => {
               return <ArticleCard key={article.article_id} {...article}/>;
            })}
          </ul>
        </div>
    )

}