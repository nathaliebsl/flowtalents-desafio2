import React from "react";
import ContaUsuario from "../components/ContaUsuario/ContaUsuario";
import CatalogoProdutos from "../components/ContaUsuario/CatalogoProdutos";
import Head from "next/head";

function HomeUsuario() {
  return (
    <>
      <Head>
        <title>EstoqueFácil | Home</title>
      </Head>
      <ContaUsuario />
      <CatalogoProdutos />
    </>
  );
}

export default HomeUsuario;
