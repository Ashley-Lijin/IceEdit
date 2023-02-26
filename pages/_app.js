import '@/styles/globals.css'
import Navbar from '@/Components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar/>
      <Component {...pageProps} />
    </div>
  )


}
