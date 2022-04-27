import { useRef, useEffect } from 'react'
import path from 'path'
import fs from 'fs/promises'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'
import { Wrapper, InnerWrapper, Img, } from '../../styles/slug.style'
import { BackBtn } from '../../components/ui/backBtn'

const PersonDetailPage = (props) => {
    const { loadedWater } = props
    const imgRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()
        tl.from(imgRef.current, { height: "20vh", duration: 1 }, "0.3")
        tl.to(imgRef.current, { height: "90vh", duration: .5 }, "<0.5")
        tl.to(imgRef.current, { width: "90vw", duration: 1 }, "<1.5")

    }, [])

    // fallback state for fallback: true
    if (!loadedWater) {
        return <p>Loading...</p>
    }

    // const container = {
    //     hidden: { opacity: 0 },
    //     show: {
    //         opacity: 1,
    //         transition: {
    //             delayChildren: 0.5,
    //             staggerDirection: -1
    //         }
    //     }
    // }

    // const item = {
    //     hidden: { opacity: 0 },
    //     show: { opacity: 1 }
    // }

    return (
        <Wrapper className="details">
            <InnerWrapper
            // as={motion.div}
            // variants={container}
            // initial="hidden"
            // animate="show"
            >
                <BackBtn />
                <Img
                    src={loadedWater.cover}
                    alt={loadedWater.name}
                    ref={imgRef}
                // as={motion.img}
                // variants={item}
                />
                <BackBtn />
            </InnerWrapper>
        </Wrapper>
    )
}

async function getData() {
    // cwd = current work directory
    const filePath = path.join(process.cwd(), 'data', 'waterData.json')
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    return data;
}

export async function getStaticProps(context) {
    const { params } = context
    const waterId = params.slug
    const data = await getData();
    const water = data.slides.find(water => water.id === waterId)

    // this will show a 404-page
    if (!water) {
        return { notFound: true }
    }

    return {
        props: {
            loadedWater: water
        }
    }
}

export async function getStaticPaths() {
    const data = await getData();
    const ids = data.slides.map(water => water.id)
    const pathsWithParams = ids.map(id => ({ params: { slug: id } }))

    return {
        paths: pathsWithParams,
        fallback: true
    }
}

export default PersonDetailPage