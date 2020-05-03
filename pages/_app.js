import Layout from '../components/Layout'
import 'mapbox-gl/dist/mapbox-gl.css';
import './global.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
