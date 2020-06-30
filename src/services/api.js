import axios from 'axios';

const api = axios.create({ baseURL: 'https://www.albion-online-data.com/api/v2/stats'});

export default api;
