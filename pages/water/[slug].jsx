import { useRef, useEffect } from 'react'
import path from 'path'
import fs from 'fs/promises'
import { Wrapper, InnerWrapper, Img, } from '../../styles/slug.style'
import { BackBtn } from '../../components/ui/backBtn'
import { gsap } from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";

gsap.registerPlugin(CustomEase);

const PersonDetailPage = (props, { isDetails }) => {
    const { loadedWater } = props
    const imgRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()

        // tl.to(imgRef.current, { duration: 1, ease: CustomEase.create("custom", "M0,0 C0.012,0.522 0.394,0.446 0.578,0.562 0.798,0.7 0.984,0.772 1,1 "), y: 0, height: "100vh" })
        tl.from(imgRef.current, { autoAlpha: 0 }, "0.3")
        tl.to(imgRef.current, { duration: 0.75, ease: "sine.inOut", y: 0, autoAlpha: 1, height: "100vh" }, "<0.2")
        tl.to(imgRef.current, { duration: 1, ease: "sine.inOut", y: 0, width: "100vw" }, "<1.3")
    }, [])

    // fallback state for fallback: true
    if (!loadedWater) {
        return <p>Loading...</p>
    }

    return (
        <Wrapper className="details">
            <InnerWrapper>
                <BackBtn />
                <Img
                    src={loadedWater.cover}
                    alt={loadedWater.name}
                    ref={imgRef}
                    isDetails={isDetails} />
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