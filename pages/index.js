import MyApp from "./_app";
import React from "react";
import FormularioLogin from "../components/FormularioLogin/FormularioLogin"



function Index() {
  return (
    <>
    <title>EstoqueFácil | Login</title>
      <MyApp Component={FormularioLogin} />
    </>
  );
}

export default Index;
