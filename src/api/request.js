const API_KEY = "%API_KEY_HERE%";

const REQUESTS = {
    'Trending': `/trending/all/week?api_key=${API_KEY}&language=en=US`,
    'Netflix Originals': `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    'Top Rated': `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
    'Action': `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    'Comedy': `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    'Horror': `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    'Documentary': `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    'Romance': `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
}


export default REQUESTS;