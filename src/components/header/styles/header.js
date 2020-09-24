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
    ${({ profilesPage }) => profilesPage && 'height: 100vh;'}
    &::before {
        content: '';
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: ${({ profilesPage }) => profilesPage ? 'rgba(0,0,0,.8)' : 'rgba(0,0,0,.4)'};
        background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
    }
`

export const Text = styled.p`
    color: #fff;
    font-size: 16px;
    line-height: 1.3;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.45);
    max-width: 600px;
    min-width: 250px;
`;

export const FeatureText = styled.h2`
    color: #fff;
    font-size: 40px;
    line-height: normal;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.45);
    margin: 0;
    margin-bottom: 10px;
`;

export const PlayButton = styled.button`
    cursor: pointer;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding: 0 2rem;
    padding-top: 0.5rem;
    margin-right: 1rem;
    background-color: #e6e6e6;
    padding-bottom: 0.5rem;
    width: 120px;
    transition: all 300ms ease-in-out;

    img {
        width: 20px;
        height: auto;
        margin-right: 10px;
        transition: all 300ms ease-in-out;
    }

    &:hover {
        color: #fff;
        background-color: rgba(51, 51, 51, 0.5);
        img {
            filter: brightness(0) invert(1);
        }
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
`;


export const Group = styled.div`
    display: flex;
    align-items: center;
`;

export const Link = styled.p`
    color: #fff;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;

export const Picture = styled.button`
    background: url(${({ src }) => src});
    background-size: contain;
    border: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;
    margin-right: 10px;
`;

export const Dropdown = styled.div`
    display: none;
    background-color: #000;
    position: absolute;
    padding: 10px;
    width: 100px;
    top: 32px;
    right: 10px;

    ${Group}:last-of-type ${Link} {
        cursor: pointer;
    }
    ${Group} {
        margin-bottom: 10px;
        &:last-of-type {
            margin-bottom: 0;
        }
        ${Link}, ${Picture} {
            cursor: default;
        }
    }

    p {
        font-size: 12px;
        margin-bottom: 0;
        margin-top: 0;
    }
`;


export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    position: relative;

    button {
        cursor: pointer;
    }

    &:hover > ${Dropdown} {
        display: flex;
        flex-direction : column;
    }
`;

export const Search = styled.div`
    display: flex;
    align-items: center;

    svg {
        color: #fff;
        cursor: pointer;
    }

    @media (max-width: 700px) {
        display: none;
    }
`;

export const SearchIcon = styled.button`
    outline: none;
    cursor: pointer;
    background-color: transparent;
    border: 0;

    img {
        filter: brightness(0) invert(1);
        width: 16px;
    }

`;

export const SearchInput = styled.input`
    outline: none;
    background-color: #44444459;
    color: #fff;
    border: 1px solid #000;
    transition: all 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    height: 30px;
    font-size: 14px;
    margin-left: ${({ active }) => (active === true ? '10px' : '0')};
    padding: ${({ active }) => (active === true ? '0 10px' : '0')};
    width: ${({ active }) => (active === true ? '200px' : '0')};
    opacity: ${({ active }) => (active === true ? '1' : '0')};
`;