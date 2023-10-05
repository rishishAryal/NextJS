import '@/styles/globals.css'
import Navbar from '../components/Navbar'
import Styles from '../styles/Home.module.css'

export default function App({ Component, pageProps }) {
 
  return <>
   <Navbar/>
  <Component {...pageProps} /></>
}
