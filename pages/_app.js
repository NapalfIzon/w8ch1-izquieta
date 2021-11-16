import "../styles/globals.css";
import Head from "next/head";
import Header from "./header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pokemon list 2.0</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
