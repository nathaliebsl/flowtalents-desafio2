import React from "react";
import {
  ChakraProvider
} from "@chakra-ui/react";
import FormularioLogin from "../components/FormularioLogin/FormularioLogin";
import FormularioLogin2 from "../components/FormularioLogin/FormularioLogin2"

function Home() {
  return (
    <ChakraProvider>
      <FormularioLogin /> 
    </ChakraProvider>
  );
}

export default Home;
