import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import SSRProvider from 'react-bootstrap/SSRProvider';
import Head from 'next/head';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <SSRProvider>
    <Head>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossOrigin="anonymous"
    />
    </Head>
    <Component {...pageProps} />
  </SSRProvider>)
}
