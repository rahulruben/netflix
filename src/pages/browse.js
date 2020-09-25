import React from 'react';
import { useContent } from '../hooks';
import BrowseContainer from '../containers/browse';

export default function Browse() {
    const { content, bannerMovie } = useContent();
    return (
        <>
            <BrowseContainer slides={content} banner={bannerMovie} />
        </>
    )
}