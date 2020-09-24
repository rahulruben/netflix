import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

instance.all = axios.all;
instance.spread = axios.spread;

export default instance;