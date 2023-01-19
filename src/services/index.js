import axios from 'axios';
const api = 'https://api.spaceflightnewsapi.net/v3/';

export const getArticles = (request) => {
  if (request.search) {
    return axios.get(
      `${api}articles?title_containss=${request.search}&_limit=${request.counter}`,
    );
  } else {
    return axios.get(`${api}articles?_limit=${request.counter}`);
  }
};

export const getArticleById = (id) => {
  return axios.get(`${api}articles/${id}`);
};
