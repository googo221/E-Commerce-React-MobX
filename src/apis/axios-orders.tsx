import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-hooks-1e8d3.firebaseio.com/',
});

export default instance;
