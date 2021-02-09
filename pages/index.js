import MyApp from "./_app";
import React from "react";
import FormularioLogin from "../components/FormularioLogin/FormularioLogin"
import Head from "next/head";




function Index() {
  return (
    <>
     <Head>
        <title>EstoqueFácil | Login</title>
      </Head>
      <MyApp Component={FormularioLogin} />
    </>
  );
}

export default Index;
