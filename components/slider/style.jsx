import styled from 'styled-components';

export const Container = styled.div`
    overflow: hidden;
    height: 34rem;
    padding: 0 5rem;
`;

export const Slider = styled.ul`
    height: 100%;
    display: flex;     
`;

export const SliderItem = styled.li`
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    width: 22rem;
    margin: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 2rem;
    cursor: grab;
    box-shadow: 0 .3rem .6rem rgba(69,69,69,.3);
`;

export const Img = styled.img`
    width: 100%;
    object-fit: cover;
    pointer-events: none;
    
`;

export const Button = styled.a`
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    padding: .4rem 1.2rem;
    font-size: 1.4rem;
    font-weight: 300;
    border-radius: 2rem;
    letter-spacing: .3rem;
    border: .1rem solid #fff;
    color: #fff;
    background-color: rgba(0,0,0,.5);
    transition: .3s ease-out;
    &:hover{
        background: rgba(255,255,255,.7);
        color: #222;
    }
`;

export const H3 = styled.h3`
    text-transform: uppercase;
    font-size: 2rem;
    margin: 7rem 0 1rem 12rem;
    font-weight: 300;
    letter-spacing: 1rem;
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    // width (or height) has to be dynamic not to cover the open page
    width: ${({ isDetails }) => (isDetails ? "100vw" : "0")};
`;