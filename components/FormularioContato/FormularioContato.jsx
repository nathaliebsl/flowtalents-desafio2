import React, { useEffect, useState } from "react";
import {
  Flex,
  Container,
  Input,
  Stack,
  InputGroup,
  Button,
  Text,
  Box,
  Textarea,
} from "@chakra-ui/react";
import feedbackImg from "../../assets/img/convo.js";

function FormularioContato({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [mercado, setMercado] = useState("");
  const [sugestao, setSugestao] = useState("");
  //   const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <Box
      bgColor="whiteAlpha.100"
      mt="10"
      mr="2"
      ml="2"
      borderRadius="base"
      borderWidth="1px"
      borderRadius="lg"
      borderColor="transparent"
      overflow="scroll"
    //   position="static"
    //   bgColor="whiteAlpha.100"
    //   mt="10"
    //   bottom="0"
    //   top="0"
    //   right="0"
    //   left="0"
    //   borderRadius="base"
    //   borderStyle="hidden"
    //   borderWidth="1px"
    >
      <Container
        p="10"
        margin="auto"
        border="1px"
        borderRadius="base"
        borderStyle="hidden"
        maxW="sm"
        minW="sm"
        minH="sm"
        maxH="auto"
        centerContent="true"
        justifySelf="center"
        alignContent="center"
        bgColor="rgb(27,60,227);
    background: radial-gradient(circle, rgba(27,60,227,1) 0%, rgba(19,12,77,1) 100%);"
      >
        {feedbackImg()}
        <Text color="white" p="3">
          Nos ajude a melhorar!
          <br /> Deixe a sua sugestão:{" "}
        </Text>
        <Stack h="auto" w="100%" spacing={2}>
          <InputGroup>
            <Input
              // variant="filled"
              bgColor="white"
              textColor="black"
              focusBorderColor="#F56565"
              value={nome}
              onChange={(event) => {
                setNome(event.target.value);
              }}
              isRequired
              box-sizing="content-box"
              type="name"
              placeholder="Seu nome"
            />
          </InputGroup>

          <InputGroup>
            <Input
              value={mercado}
              onChange={(event) => {
                setMercado(event.target.value);
              }}
              bgColor="white"
              textColor="black"
              focusBorderColor="#F56565"
              boxSizing="content-box"
              isRequired
              type="companyName"
              placeholder="Nome do seu mercado"
            />
          </InputGroup>
          <InputGroup>
            <Textarea
              h="20"
              value={sugestao}
              onChange={(event) => {
                setSugestao(event.target.value);
              }}
              bgColor="white"
              textColor="black"
              focusBorderColor="#F56565"
              boxSizing="content-box"
              isRequired
              type="suggestionbox"
              placeholder="Deixe aqui sua sugestão de produto"
            ></Textarea>
          </InputGroup>
          <InputGroup justifyContent="center">
            <Button w="40%">Enviar</Button>
          </InputGroup>
        </Stack>
      </Container>
    </Box>
  );
}

export default FormularioContato;
