import { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import path from 'path'
import fs from 'fs/promises';
import { motion } from 'framer-motion';
import { Wrapper, InnerWrapper, H2, A, LI } from '../styles/common.style'
import { BoxUL } from '../components/animations/boxUl';
import { ToModelsTransition } from '../components/animations/toDetailsTransition';
import { HomeTransition } from '../components/animations/homeTransition'
import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    // width (or height) has to be dynamic not to cover the open page
    width: ${({ isDetails }) => (isDetails ? "100vw" : "0")};
`;


export default function Home(props) {
  const [isDetails, setIsDetails] = useState(false)
  const { peoples } = props

  /** Pagetransition for exiting to models page
   * We need this to be dependent on what state we're in,
   * so that it doesn't transition before we click the link */
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
      <Head>
        <title>Dynamic Routing</title>
        <meta name="Dynamic Routing with Local Data" content="Routing" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <HomeTransition />
      <Wrapper>
        <InnerWrapper>
          <H2>click for details</H2>
          <BoxUL>
            {peoples.map(people => (
              <LI key={people.id} as={motion.li}
                variants={listVariant}>
                <Link href={`/people/${people.id}`} passHref>
                  <A
                    onClick={() => setIsDetails(!isDetails)}
                  >{people.name}</A>
                </Link>
              </LI>
            ))}
          </BoxUL>
          <Overlay isDetails={isDetails}>
            {handleActive()}
          </Overlay>
        </InnerWrapper>
      </Wrapper>
    </>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'peopleData.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)

  return {
    props: {
      peoples: data.peoples
    }
  }
}