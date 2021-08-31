import { AppProps } from 'next/dist/shared/lib/router/router'
import NextNProgress from 'nextjs-progressbar'
import Head from 'next/head'
import SEO from '../../next-seo-config'

import GlobalStyles from 'styles/global'
import { DefaultSeo } from 'next-seo'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="7bmmiewlLmTvUWv7fIjyMqGkzD2Nb8tqEc-apL1WthM"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNProgress
        color="#f231a5"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </>
  )
}

export default App
