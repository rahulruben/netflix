import styled from 'styled-components/macro';

export const AnimationWrapper = styled.div`
    .fade-enter {
        opacity: 0.01;
    }

    .fade-enter.fade-enter-active {
    opacity: 1;
        transition: opacity 300ms ease-in;
    }

    .fade-exit {
        opacity: 1;
    }

    .fade-exit.fade-exit-active {
    opacity: 0.01;
        transition: opacity 300ms ease-in;
    }

    div.transition-group {
        position: relative;
    }
`;