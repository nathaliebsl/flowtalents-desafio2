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
  useToast,
  createStandaloneToast,
} from "@chakra-ui/react";
import feedbackImg from "../../assets/img/convo.js";

function FormularioContato() {
  const [nome, setNome] = useState("");
  const [mercado, setMercado] = useState("");
  const [sugestao, setSugestao] = useState("");


  function postFeedback(e, n, m, s) {
    console.log(e, n, m, s);
    fetch(`https://challenge-products-api.herokuapp.com/sugestoes`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: n,
        storeName: m,
        suggestion: s,
      }),
    }).then(() => {
      setNome("");
      setMercado("");
      setSugestao("")
      console.log(nome, mercado, sugestao);
    });
  }

  function formEnviado() {
    const toast = createStandaloneToast()
        toast({
          title: "Obrigado!",
          description: "Sua sugestão de Produto(s) foi enviada para o EstoqueFácil",
          status: "success",
          duration: 5000,
          position: "top",
          isClosable: true,
        })
      }

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
    >
      <Container
        p="10"
        margin="auto"
        border="1px"
        borderRadius="2xl"
        borderStyle="hidden"
        maxW="sm"
        minW="sm"
        minH="sm"
        maxH="auto"
        centerContent="true"
        overflow="scroll"
        // justifySelf="center"
        // alignContent="center"
        bgColor="rgb(27,60,227);
    background: radial-gradient(circle, rgba(27,60,227,1) 0%, rgba(19,12,77,1) 100%);"
      >
        {feedbackImg()}
        <Text color="white" p="3">
          Nos ajude a melhorar!
          <br /> Deixe a sua sugestão:{" "}
        </Text>
        <Stack
          onSubmit={(event) => {
            formEnviado();
            event.preventDefault();
            event.stopPropagation();
            postFeedback(event, nome, mercado, sugestao);
          }}
          as="form"
          h="auto"
          w="100%"
          spacing={2}
        >
          <InputGroup>
            <Input
              // variant="filled"
              bgColor="white"
              textColor="black"
              focusBorderColor="blue.200"
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
              focusBorderColor="blue.200"
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
              focusBorderColor="blue.200"
              boxSizing="content-box"
              isRequired
              type="suggestionbox"
              placeholder="Deixe aqui sua sugestão de produto"
            ></Textarea>
          </InputGroup>
          <InputGroup justifyContent="center">
            <Button type="submit" w="40%">
              Enviar
            </Button>
          </InputGroup>
        </Stack>
      </Container>
    </Box>
  );
}

export default FormularioContato;
