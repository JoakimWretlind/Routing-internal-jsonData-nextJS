import Head from 'next/head'
import path from 'path'
import fs from 'fs/promises';
import { Section } from '../components/slider';

export default function Home({ slides }) {
  return (
    <>
      <Head>
        <title>Dynamic Routing</title>
        <meta name="Dynamic Routing with Local Data" content="Routing" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Section slides={slides} />
    </>
  )
}

/** Get the data */
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'waterData.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)

  return {
    props: {
      slides: data.slides
    }
  }
}
