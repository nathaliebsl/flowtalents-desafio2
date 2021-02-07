
import React from "react";
import ContatoUsuario from "../components/FormularioContato/ContatoUsuario";
import FormularioContato from "../components/FormularioContato/FormularioContato"

function Contato() {
  return (
    <>
      <ContatoUsuario />
      <FormularioContato aoEnviar={aoEnviarForm} />
    </>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default Contato;
