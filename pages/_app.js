import '../styles/globals.css'
import { Layout } from '../src/components/layout/layout.component'

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
export default MyApp