import { useEffect, useState } from 'react';
import axios from '../api/axios';
import REQUESTS from '../api/request';

export default function useContent() {
    const [content, setContent] = useState('');
    const [bannerMovie, setBannerMovie] = useState([]);

    const buildByGenre = (req) => {
        let movies = []
        movies = req.map(movie => ({
            genre: movie.genre,
            data: movie.data.results
        }))
        setBannerMovie(
            movies[Math.floor(Math.random() * movies.length - 1)]
                ?.data[Math.floor(Math.random() * movies?.length - 1)]
        );
        return movies;
    }

    useEffect(() => {
        async function fetchData() {

            axios.all(Object.keys(REQUESTS).map(async (genre) => {
                const payload = await axios.get(REQUESTS[genre])
                payload.genre = genre;
                return payload;
            }))
                .then(axios.spread(function (...res) {
                    setContent(buildByGenre(res));
                }));
        }
        fetchData();

    }, []);

    return { content, bannerMovie };
}