import { Provider } from "react-redux";
import store from "../store/store.js";
import Layout from "../layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </>
  );
}

export default MyApp;
