import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion } from 'framer-motion';
import { Wrapper, InnerWrapper, H2, A, LI } from "../../styles/common.style";
import { Container, Slider, SliderItem, Img, Button, H3, Overlay } from "./style";
import { BoxUL } from "../animations/boxUl";
import { ToModelsTransition } from "../animations/toDetailsTransition";
import styled from 'styled-components';



export const Section = ({ slides }) => {
    const [isDetails, setIsDetails] = useState(false)
    const [constraint, setConstraint] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const calcConstraint = () => {
            setConstraint(ref?.current?.scrollWidth - ref?.current?.offsetWidth);
        };

        calcConstraint();
        window.addEventListener("resize", calcConstraint);

        return () => window.removeEventListener("resize", calcConstraint);
    }, []);

    const handleActive = () => {
        if (isDetails == true) {
            return (
                <ToModelsTransition />
            )
        }
    }
    const listVariant = {
        hidden: {
            y: -20,
            opacity: 0,
            transition: { delay: 0 }
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: .3,
                ease: 'easeOut'
            }
        }
    }
    return (
        <>
            <H3>water</H3>
            <Container>
                <Slider
                    as={motion.ul}
                    ref={ref}
                    drag="x"
                    dragConstraints={{ right: 0, left: -constraint }}
                    key={constraint}
                >
                    {slides.map(water => (
                        <SliderItem key={water.id} as={motion.li}
                            variants={listVariant}>
                            <Img src={water.cover} alt={water.name} />
                            <Link href={`/water/${water.id}`} passHref>
                                <Button>watch</Button>
                            </Link>
                        </SliderItem>
                    ))}

                    <Overlay isDetails={isDetails}>
                        {handleActive()}
                    </Overlay>
                </Slider>
            </Container>
        </>
    )
}