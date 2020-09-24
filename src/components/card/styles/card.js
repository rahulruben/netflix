import styled from 'styled-components/macro';

export const Title = styled.p`
    font-size: 24px;
    color: #e5e5e5;
    font-weight: bold;
    margin-left: 56px;
    margin-right: 56px;
    margin-top: 0;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    box-sizing: border-box;

    > ${Title} {
        @media (max-width: 1000px) {
            margin-left: 30px;
        }
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const Group = styled.div`
    position: relative;
    display: flex;
    flex-direction: ${({ flexDirection }) => flexDirection === 'row' ? 'row' : 'column'};
    ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
    ${({ margin }) => margin && `margin: ${margin}`};

    > ${Container}:first-of-type {
        @media (min-width: 1100px) {
            margin-top: -150px;
        }
    }
`;

export const Entities = styled.div`
    display: flex;
    flex-direction: row;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const SubTitle = styled.p`
    font-size: 12px;
    color; #fff;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
    user-select: none;
`;

export const Text = styled.p`
    margin-top: 5px;
    font-size: 10px;
    color: #fff;
    margin-bottom: 0;
    user-select: none;
    line-height: normal;
`;

export const FeatureText = styled.p``;

export const Feature = styled.div``;

export const FeatureTitle = styled(Title)`
    margin-left: 0;
`;

export const FeatureClose = styled.button``;

export const Maturity = styled.div``;

export const Content = styled.div``;

export const Meta = styled.div`
    display: none;
    position: absolute;
    bottom: 0;
    padding: 10px;
    background-color: #00000008f;
`;


export const Item = styled.div``;

export const Image = styled.img`
    border: 0;
    max-width: 305px;
    cursor: pointer;
    padding: 0;
    margin: 0;
    height: auto;
`;