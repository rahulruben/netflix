import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => (src ? `${src}`
        : '../images/misc/home-india.jpg')}) top left / cover no-repeat;
    z-index: 0;
    background-position: top center;
    &::before {
        content: '';
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.4);
        background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
    }
`

export const Text = styled.p`
    color: #fff;
    font-size: 16px;
    line-height: 1.2;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.45);
    max-width: 600px;
    min-width: 250px;
`;

export const FeatureText = styled.h2`
    color: #fff;
    font-size: 50px;
    line-height: normal;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.45);
    margin: 0;
    margin-bottom: 10px;
`;

export const FeatureButton = styled.button`
    cursor: pointer;
    color: #000;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding: 0 2rem;
    padding-top: 0.5rem;
    margin-right: 1rem;
    background-color: #e6e6e6;
    padding-bottom: 0.5rem;
    width: fit-content;
    &:hover {
        color: #fff;
        background-color: rgba(51, 51, 51, 0.5);
        transition: all 0.2s;
    }
`;



export const Container = styled.div`
    display: flex;
    position: relative;
    margin: 0 56px;
    z-index: 1;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
    }

    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;

export const Feature = styled(Container)`
    padding: 150px 0 500px 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;
`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;

    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`

export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: #fff;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:hover {
        background-color: #f40612;
    }
`