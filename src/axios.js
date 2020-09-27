import axios from 'axios';

//Base URL where we make the Requests

// 1) Create an AXIOS base URL
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

// 2) instance.get("Request")

export default instance;
