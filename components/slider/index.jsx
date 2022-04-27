import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion } from 'framer-motion';
import { Container, Slider, SliderItem, Img, Button, H3, Overlay } from "./style";
import { HomeTransition } from "../animations/homeTransition";
import { ToModelsTransition } from "../animations/toDetailsTransition";

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
                duration: 1.3,
                ease: 'easeOut'
            }
        }
    }
    return (
        <>
            <Container>
                {/* fading transition */}
                <HomeTransition >
                    <H3>water</H3>
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
                                <Img src={water.cover} alt={water.name} isDetails={isDetails} />
                                <Link href={`/water/${water.id}`} passHref>
                                    <Button onClick={() => setIsDetails(!isDetails)}>watch</Button>
                                </Link>
                            </SliderItem>
                        ))}

                    </Slider>
                </HomeTransition>
            </Container>
            {/* stagger transition */}
            <Overlay isDetails={isDetails}>
                {handleActive()}
            </Overlay>
        </>
    )
}