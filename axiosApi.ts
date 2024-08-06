import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'http://16.170.240.179/api/v1',
});

export default axiosApi;
