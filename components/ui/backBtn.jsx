import styled from 'styled-components';
import { VscArrowLeft } from "react-icons/vsc";
import Link from 'next/link';

export const Back = styled.a`
    position: absolute;
    top: 6rem;
    left: 5rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: .7rem;
    color: #333;
    transition: .25s ease-out;
    &:hover{
        cursor: pointer;
        color: #999;
    }
`;

export const Icon = styled(VscArrowLeft)`
    padding-top: .3rem;
    color: #333;
    margin-right: 1rem;
`;

export const BackBtn = () => {
    return (
        <Link href="/" passHref>
            <Back>
                < Icon />
                back
            </Back>
        </Link>
    )
}