import React, { useContext, useState, useEffect } from 'react';
import { SelectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';
import { Header, Loading, Card } from '../components';
import { MOVIES_BASE_API, MOVIES_BASE_IMAGE_API } from '../api/endpoint';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export default function BrowseContainer({ slides, banner }) {
    const [searchTerm, setSearchTerm] = useState('')
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
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"></Header.Logo>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <Header.Profile>
                            <Header.Picture src={user?.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user?.photoURL} />
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureText>
                        {banner?.title || banner?.name || banner?.original_name}
                    </Header.FeatureText>
                    <Header.Text>
                        {banner?.overview}
                    </Header.Text>
                    <Header.PlayButton>
                        Play
                    </Header.PlayButton>
                </Header.Feature>
            </Header>
            <Card.Group>
                {
                    slides?.map((item) => (
                        <Card key={item.genre}>
                            <Card.Item>
                                <Card.Title>{item.genre}</Card.Title>
                                <Card.Entities>
                                    {
                                        item?.data?.map(movie => (
                                            <Card.Item key={movie?.title} item={movie}>
                                                <Card.Image src={`${MOVIES_BASE_IMAGE_API}${movie.backdrop_path}`}></Card.Image>
                                                <Card.Meta>
                                                    <Card.SubTitle>{movie?.title || movie?.name || movie?.original_name}</Card.SubTitle>
                                                    <Card.Text>{movie.overview}</Card.Text>
                                                </Card.Meta>
                                            </Card.Item>
                                        ))
                                    }
                                </Card.Entities>
                            </Card.Item>
                        </Card>
                    ))
                }
            </Card.Group>
        </>
    ) : (
            <SelectProfileContainer user={user} setProfile={setProfile} />
        )
}