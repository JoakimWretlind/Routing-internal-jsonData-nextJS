import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
    overflow: hidden;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #02050E;
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
`;

export const ImageWrapper = styled.div`    
    width: 50vh;
`;

// Use keyframes here becaus that's the most effective way
const fadeIn = keyframes`
  0% {
        opacity: 0;
        height: 50vh;
        width: 20%;
        animation-timing-function: cubic-bezier(0.37, 0, 0.63, 1);
    }
    10% {
        opacity: 0;
        height: 50vh;
        width: 20%;
        animation-timing-function: cubic-bezier(0.37, 0, 0.63, 1);
    }
    20%{
      opacity: 1;
    }
    50%{    
        width: 100vw;    
    }
    60%{
        height: 50vh;
    }
    100% {
        height: 100vh;
        animation-timing-function: cubic-bezier(0.37, 0, 0.63, 1);
  }
`

export const Img = styled.img`      
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    animation: 1.7s ${fadeIn};
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
   
    color: #333;
    &:hover{
        cursor: pointer; 
    }
`;

// Set the drif-template-columns to repeat the same amount of panels in 
// '/components/animations/toDetailsTransition', 1fr will make them evenly
// wide
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
    background-color: #02050E;
`;