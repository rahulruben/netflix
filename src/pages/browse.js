import React from 'react';
import { useContent } from '../hooks';
import REQUESTS from '../api/request';
import BrowseContainer from '../containers/browse';

export default function Browse() {
    const { content, bannerMovie } = useContent(REQUESTS.fetchTopRated);
    return <BrowseContainer slides={content} banner={bannerMovie}/>
}