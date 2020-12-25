import { Provider } from "react-redux"
import store from "../store/store"
import Layout from "../layout/Layout"

function MyApp({ Component, pageProps }): JSX.Element {
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
