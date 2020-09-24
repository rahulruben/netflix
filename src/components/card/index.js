import React, { createContext, useState, useContext } from 'react';
import {
    Container,
    Group,
    Title,
    SubTitle,
    Text,
    Meta,
    Item,
    Image,
    Feature,
    Entities
} from './styles/card';

export const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({});


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

Card.Feature = function CardFeature({ children, ...restProps }) {
    return <Feature {...restProps} >{children}</Feature>
}

Card.Entities = function CardEntities({ children, ...restProps }) {
    return <Entities {...restProps} >{children}</Entities>
}

Card.Item = function CardItem({ item, children, ...restProps }) {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext);

    return <Item onClick={() => {
        setItemFeature(item);
        setShowFeature(true)
    }}{...restProps} >
        {children}
    </Item>
}

Card.Image = function CardImage({ ...restProps }) {
    return <Image {...restProps} />
}