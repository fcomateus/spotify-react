import axios from 'axios';

// json-server --watch db.json --port 3003
const api = axios.create({
  baseURL: 'http://localhost:3003',
});

export default api;
