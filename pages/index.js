import MyApp from "./_app";
import React from "react";
import FormularioLogin from "../components/FormularioLogin/FormularioLogin"



function Index() {
  return (
    <>
      <MyApp title="EstoqueFácil" Component={FormularioLogin} />
    </>
  );
}

export default Index;
