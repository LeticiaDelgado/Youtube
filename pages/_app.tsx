import '../styles/globals.css'
import type { AppProps } from 'next/app'
import HomePage from '../pages/HomePage'

function MyApp({ Component, pageProps }: AppProps) {
  return <HomePage /> ;
}

export default MyApp
