import axios from 'axios';
import config from '../config';


export default axios.create({
  baseURL: config.BASE_URL,
  params: {
    api_key: config.API_KEY,
    page: 1,
    include_adult: true
  }
});
