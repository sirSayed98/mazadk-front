import "../styles/globals.css";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../Redux/store";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
          ></link>
        </Head>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
