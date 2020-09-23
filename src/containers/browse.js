import React, { useContext, useState, useEffect } from 'react';
import { SelectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';
import { Header, Loading } from '../components';
import  { MOVIES_BASE_API } from '../api/endpoint';

export default function BrowseContainer({ slides, banner }) {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [profile.displayName])

    return profile.displayName ? (
        <>
            {loading ? (
                <Loading src={user.photoURL} />
            ) : (
                    <Loading.ReleaseBody />
                )}

            <Header src={`${MOVIES_BASE_API}${banner?.backdrop_path}`}>
                <Header.Feature>
                    <Header.FeatureText>
                        {banner?.title || banner?.name || banner?.original_name}
                    </Header.FeatureText>
                    <Header.Text>
                        {banner?.overview}
                    </Header.Text>
                    <Header.FeatureButton>
                        Play
                    </Header.FeatureButton>
                </Header.Feature>
            </Header>
        </>
    ) : (
            <SelectProfileContainer user={user} setProfile={setProfile} />
        )
}