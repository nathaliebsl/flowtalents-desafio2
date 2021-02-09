import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import App from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
      <Head>
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);

  return { ...appProps };
};

export default MyApp;
