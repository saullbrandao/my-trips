import { AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Trips</title>
        <meta
          name="description"
          content="A simple project to show my favorite sports in the world."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
