import { useEffect, useState } from 'react';
import axios from '../api/axios';

export default function useContent(genre) {
    const [content, setContent] = useState('');

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(genre);
            setContent(request.data.results)
            return request;
        }
        fetchData();
    }, [genre]);

    return { content };
}