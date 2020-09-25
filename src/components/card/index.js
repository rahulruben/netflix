import React, { createContext, useState } from 'react';
import {
    Container,
    Group,
    Title,
    SubTitle,
    Text,
    Meta,
    Item,
    Image,
    Entities
} from './styles/card';

export const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
    const [showFeature, setShowFeature] = useState(false);

    return (
        <FeatureContext.Provider value={{ showFeature, setShowFeature }}>
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
    );
}

Card.Group = function CardGroup({ children, ...restProps }) {
    return <Group {...restProps} >{children}</Group>
}

Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps} >{children}</Title>
}

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps} >{children}</SubTitle>
}

Card.Text = function CardText({ children, ...restProps }) {
    return <Text {...restProps} >{children}</Text>
}

Card.Meta = function CardMeta({ children, ...restProps }) {
    return <Meta {...restProps} >{children}</Meta>
}

Card.Entities = function CardEntities({ children, ...restProps }) {
    return <Entities {...restProps} >{children}</Entities>
}

Card.Item = function CardItem({ item, children, ...restProps }) {
    return <Item {...restProps} >
        {children}
    </Item >
}

Card.Image = function CardImage({ ...restProps }) {
    return <Image {...restProps} />
}