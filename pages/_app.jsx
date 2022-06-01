import { AnimatePresence } from 'framer-motion'
import { GlobalStyle } from '../styles/globalStyle'
/** AnimatePresence has to be used here (and not in Layout).
 * router might be a bit redundant in this case.
 */
/**
 * homeTransition is important to hold back the image from the stagger
 */

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
