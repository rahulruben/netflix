import React, { useState } from 'react';
import { Search, SearchIcon, SearchInput, Dropdown, Profile, Link, Picture, Group, Container, Logo, ButtonLink, Background, Feature, Text, FeatureText, PlayButton } from './styles/header';
import { Link as ReactRouterLink } from 'react-router-dom';

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Header.FeatureText = function HeaderFeatureText({ children, ...restProps }) {
    return <FeatureText {...restProps}>{children}</FeatureText>
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return (
        <PlayButton {...restProps}>
            <img src="../images/icons/play.png" alt="play" />
            {children}
        </PlayButton>
    )
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to} >
            <Logo {...restProps} />
        </ReactRouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture src={`/images/users/${src}.png`} />
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, children, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);
    return (
        <Search {...restProps}>{children}
            <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)}>
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                active={searchActive}
            />
        </Search>
    )
}