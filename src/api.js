import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-news-server.onrender.com",
});

export const getArticles = () => {
    return myApi.get(`/api/articles`).then((res) => {
        return res.data.articles;
      });
}

export const getUsers = () => {
    return myApi.get(`/api/users`).then((res) => {
        return res.data.users;
      });
}

export const getTopics = () => {
    return myApi.get(`/api/topics`).then((res) => {
        return res.data.topics;
      });
}

export const getArticlesById = (articleId) => {
    return myApi.get(`/api/articles/${articleId}`).then((res) => {
        return res.data.articles;
      });
}

export const getCommentsByArticleId = (articleId) => {
    return myApi.get(`/api/articles/${articleId}/comments`).then((res) => {
        return res.data.articles;
      });
}



