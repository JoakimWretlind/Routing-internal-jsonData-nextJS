import styled from 'styled-components';

export const Wrapper = styled.div`
    overflow:hidden;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &.details{
        background-color: #000;
    }
`;

export const InnerWrapper = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    max-width: 150rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    border: .2rem solid red;
`;

export const Img = styled.img`
    height: 100%;
    object-fit: cover;
`;

export const H2 = styled.h2`
    text-transform: capitalize;
    font-weight: 400;
    font-size: clamp(2rem, 2vw, 3rem);
    letter-spacing: clamp(.3rem, 2vw, 1rem);
    color: #333;
`;

export const H3 = styled.h3`
    text-transform: capitalize;
    font-weight: 300;
    font-size: clamp(1.4rem, 2vw, 2rem);
    letter-spacing: clamp(.3rem, 2vw, 1rem);
    color: #333;
`;

export const UL = styled.ul`
    height: 50vh;
    min-height: 22rem;
    width: 100%;
    max-width: 56rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const LI = styled.li`
    padding: .5rem;
`;

export const A = styled.a`
    text-transform: capitalize;
    font-weight: 200;
    font-size: clamp(2rem, 2vw, 3rem);
    letter-spacing: clamp(.1rem, 2vw, .3rem);
    transition: .25s ease-out;
    color: #333;
    &:hover{
        cursor: pointer; 
    }
`;

// Set the drif-template-columns to repeat the same amount of panels in 
// '/components/animations/toDetailsTransition', 1fr will make them even
export const MotionOverlay = styled.div`
    position: fixed;
    top: 0;
    height: 100%;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`;

export const Panel = styled.div`
    height: 100vh;
    background-color: #000;
`;