import axios from 'axios';

// json-server --watch db.json --port 3003
const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
});

export default api;
