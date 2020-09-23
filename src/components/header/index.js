import React from 'react';
import { Container, Logo, ButtonLink, Background, Feature, Text, FeatureText, FeatureButton } from './styles/header';
import { Link as ReactRouterLink } from 'react-router-dom';

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}


Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureText = function HeaderFeatureText({ children, ...restProps }) {
    return <FeatureText {...restProps}>{children}</FeatureText>
}

Header.FeatureButton = function HeaderFeatureButton({ children, ...restProps }) {
    return <FeatureButton {...restProps}>{children}</FeatureButton>
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