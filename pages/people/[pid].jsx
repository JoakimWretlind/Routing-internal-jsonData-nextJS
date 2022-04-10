import path from 'path'
import fs from 'fs/promises'
import { Wrapper, InnerWrapper, H2, H3, Img } from '../../styles/common.style'
import { BackBtn } from '../../components/ui/backBtn'

const PersonDetailPage = (props) => {
    const { loadedPeople } = props

    // fallback state for fallback: true
    if (!loadedPeople) {
        return <p>Loading...</p>
    }

    return (
        <Wrapper className="details">
            <InnerWrapper>
                <BackBtn />
                <H2>{loadedPeople.name}</H2>
                <Img
                    src={loadedPeople.cover}
                    alt={loadedPeople.name}
                />
                <H3>{loadedPeople.country}</H3>
                <BackBtn />
            </InnerWrapper>
        </Wrapper>
    )
}

async function getData() {
    // cwd = current work directory
    const filePath = path.join(process.cwd(), 'data', 'peopleData.json')
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    return data;
}

export async function getStaticProps(context) {
    const { params } = context
    const peopleId = params.pid
    const data = await getData();
    const people = data.peoples.find(people => people.id === peopleId)

    // this will show a 404-page
    if (!people) {
        return { notFound: true }
    }

    return {
        props: {
            loadedPeople: people
        }
    }
}

export async function getStaticPaths() {
    const data = await getData();
    const ids = data.peoples.map(people => people.id)
    const pathsWithParams = ids.map(id => ({ params: { pid: id } }))

    return {
        paths: pathsWithParams,
        fallback: true
    }
}

export default PersonDetailPage