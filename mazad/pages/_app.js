import "../styles/globals.css";
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return(

    <>
     <Head>
     <link rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
       integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"/>
     </Head>
    <Component {...pageProps} />
  </>
  )
  
}

export default MyApp;
