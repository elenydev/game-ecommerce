import { Provider } from "react-redux"
import store from "../store/store.js"
import Layout from "../layout/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}

export default MyApp
