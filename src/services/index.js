import axios from 'axios';
const api = 'https://api.spaceflightnewsapi.net/v3/';

export const getArticles = () => {
  return axios.get(`${api}articles?_limit=10`);
};
