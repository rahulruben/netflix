import { useEffect, useState } from 'react';
import axios from '../api/axios';

export default function useContent(genre) {
    const [content, setContent] = useState('');
    const [bannerMovie, setBannerMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(genre);
            setContent(request.data.results)
            setBannerMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ])
            return request;
        }
        fetchData();
    }, [genre]);

    return { content, bannerMovie };
}