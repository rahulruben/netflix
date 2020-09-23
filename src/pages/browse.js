import React from 'react';
import { useContent } from '../hooks';
import REQUESTS from '../api/request';
import BrowseContainer from '../containers/browse';

const base_url_small = 'https://image.tmdb.org/t/p/w185/';
const base_url_original = 'https://image.tmdb.org/t/p/original/';

export default function Browse() {
    const { content } = useContent(REQUESTS.fetchTopRated);
    console.log(content)
    // useEffect(() => {
    //     async function fetchData() {
    //         const request = await axios.get(fetchUrl);
    //         setMovies(request.data.results)
    //         return request;
    //     }



    //     fetchData();
    // }, [fetchUrl])

    return <BrowseContainer slides={content} />
}