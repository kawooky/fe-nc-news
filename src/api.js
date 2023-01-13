import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-news-server.onrender.com",
});

export const getArticles = (sort_by = "created_at", order = "DESC", topic=false) => {
    if (!topic) {
        return myApi.get(`/api/articles?sort_by=${sort_by}&order=${order}`).then((res) => {
            return res.data.articles;
          });
    } else {
        return myApi.get(`/api/articles?topic=${topic}&sort_by=${sort_by}&order=${order}`).then((res) => {
            return res.data.articles;
          });
    }
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

export const patchVote = (article_id, vote) => {
    return myApi.patch(`/api/articles/${article_id}`, {"inc_votes":vote} ).then((res) => {
        return res;
      });
}

export const postComment = (article_id, commentText, username) => {
    return myApi.post(`/api/articles/${article_id}/comments`, {username: username, body: commentText})
    .then((res) => {
        return res.data.comment
    })
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

// export const getArticlesByTopic = (topic) => {
//     return myApi.get(`/api/articles?topic=${topic}`).then((res) => {
//         return res.data.articles;
//       });
// }

