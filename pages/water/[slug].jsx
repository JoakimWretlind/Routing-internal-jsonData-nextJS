import { useRef } from 'react'
import path from 'path'
import fs from 'fs/promises'
import { Wrapper, InnerWrapper, Img, } from '../../styles/slug.style'
import { BackBtn } from '../../components/ui/backBtn'

const PersonDetailPage = (props, { isDetails }) => {
    const { loadedWater } = props
    const imgRef = useRef(null)

    if (!loadedWater) {
        return <p>Loading...</p>
    }

    return (
        <Wrapper>
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

/************ GetData ************/
async function getData() {
    // cwd = current work directory
    const filePath = path.join(process.cwd(), 'data', 'waterData.json')
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    return data;
}

/************ GetStaticProps ************/
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

/************ GetStaticPaths ************/
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