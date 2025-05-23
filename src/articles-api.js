// У цьому файлі будемо зберігати функції для HTTP-запитів до бекенду із статтями.
// src/articles-api.js
import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export const fetchArticlesWithTopic = async topic => {
  const response = await axios.get(`/search?query=${topic}`);
  return response.data.hits;
};
