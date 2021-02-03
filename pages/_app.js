import React from "react";
import {
  ChakraProvider,
} from "@chakra-ui/react";
import FormularioLogin from "../components/FormularioLogin/FormularioLogin";


function Home() {
  return (
    <ChakraProvider>
      <FormularioLogin/>
    </ChakraProvider>
  );
}

export default Home;
