import * as React from 'react'
import '../components/accordion.css'
import Meta from '../components/meta'
import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'
import { Analytics } from '@vercel/analytics/react';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Meta />
        <Component {...pageProps} />
      </ThemeProvider>
      <Analytics />
    </>
  )
}

export default App
