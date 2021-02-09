import React from "react";
import Head from "next/head";
import ContatoUsuario from "../components/FormularioContato/ContatoUsuario";
import FormularioContato from "../components/FormularioContato/FormularioContato";


function Contato() {
  return (
    <>
      <Head>
        <title>EstoqueFácil | Contato</title>
      </Head>
      <ContatoUsuario />
      <FormularioContato />
    </>
  );
}

export default Contato;
