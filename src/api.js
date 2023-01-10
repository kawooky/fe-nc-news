import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-news-server.onrender.com",
});

export const getArticles = () => {
    return myApi.get(`/api/articles`).then((res) => {
        return res.data.articles;
      });
}

export const getArticlesById = (articleId) => {
    return myApi.get(`/api/articles/${articleId}`).then((res) => {
        return res.data.article;
      });
}

export const getCommentsByArticleId = (articleId) => {
    return myApi.get(`/api/articles/${articleId}/comments`).then((res) => {
        return res.data.comments;
      });
}



