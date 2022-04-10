import { AnimatePresence } from 'framer-motion'
import { GlobalStyle } from '../styles/globalStyle'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} router={router} key={router.pathname} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
