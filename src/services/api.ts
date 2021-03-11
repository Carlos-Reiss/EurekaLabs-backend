import axios from 'axios';

/* terminação do axios json cepnumeros/json/ */

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export default api;
