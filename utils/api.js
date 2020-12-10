import axios from 'axios';
export const API = 'http://localhost:8000/v1';

export const fetcher = (url, params) => {
  return axios.get(url, {params: params}).then(res => res.data);
};
