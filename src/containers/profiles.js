import React from 'react';
import { Header } from '../components';
import { Profiles } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function SelectProfileContainer({ user, setProfile }) {
    return (
        <>
            <Header src="images/misc/profile-banner.jpg" profilesPage>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"></Header.Logo>
                </Header.Frame>
                <Profiles>
                    <Profiles.Title>Who's watching?</Profiles.Title>
                    <Profiles.List>
                        <Profiles.Item onClick={() => setProfile({
                            displayName: user.displayName,
                            photoURL: user.photoURL
                        })}>
                            <Profiles.Picture src={user?.photoURL} />
                            <Profiles.Name>{user?.displayName}</Profiles.Name>
                        </Profiles.Item>
                    </Profiles.List>
                </Profiles>
            </Header>
        </>
    )
}