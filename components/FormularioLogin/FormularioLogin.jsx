import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Flex,
  Container,
  Input,
  Stack,
  InputGroup,
  Button,
  createStandaloneToast,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import loginImg from "../../assets/img/login.js";

function FormularioLogin() {
  const [user, setUser] = useState("");
  const [password, setPW] = useState("");
  const router = useRouter();

  function logUser(e, user, password) {
    // console.log(e, user, password);
    fetch(`https://challenge-products-api.herokuapp.com/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        login: user,
        password: password,
      }),
    }).then((response) => {
      // console.log("Server response status: " + response.status);
      if (response.status == 200) {
        router.replace("/conta", "/", { shallow: true });
      } else {
        userNotfound();
        setUser("");
        setPW("");
      }
    });
  }

  function userNotfound() {
    const toast = createStandaloneToast();
    toast({
      title: "Usuário ou Senha inválidos",
      description: "Por favor tente novamente",
      status: "error",
      duration: 5000,
      position: "top",
      isClosable: true,
    });
  }

  return (
    <Flex
      position="fixed"
      bottom="0"
      top="0"
      right="0"
      left="0"
      bgColor="rgb(27,60,227);
    background: radial-gradient(circle, rgba(27,60,227,1) 0%, rgba(19,12,77,1) 100%);"
      minH="100%"
      height="100%"
      width="full"
    >
      <Container
        aria-label="login-container"
        p="14"
        margin="auto"
        border="2px"
        borderRadius="base"
        borderStyle="hidden"
        maxW="sm"
        minW="sm"
        minH="sm"
        maxH="sm"
        centerContent="true"
        justifySelf="center"
        alignContent="center"
        bgColor="white"
      >
        {loginImg()}
        <Text p="3"> Bem-vindo ao EstoqueFácil! </Text>
        <Stack
          onSubmit={(event) => {
            event.preventDefault();
            event.stopPropagation();
            logUser(event, user, password);
          }}
          mt="2"
          as="form"
          h="auto"
          w="100%"
          spacing={2}
        >
          <InputGroup>
            <Input
              aria-label="username-input"
              value={user}
              onChange={(event) => {
                setUser(event.target.value);
              }}
              isRequired
              box-sizing="content-box"
              type="username"
              ng-hide="true"
              placeholder="username: viaflow"
            />
          </InputGroup>

          <InputGroup>
            <Input
              aria-label="password-input"
              value={password}
              onChange={(event) => {
                setPW(event.target.value);
              }}
              boxSizing="content-box"
              isRequired
              type="password"
              autoComplete="username"
              placeholder="senha: 12345"
            />
          </InputGroup>
          <InputGroup justifyContent="center">
            <Button
              aria-label="login-submit-button"
              colorScheme="facebook"
              mt="2"
              type="submit"
              w="50%"
            >
              Login
            </Button>
          </InputGroup>
          <input
            size="xs"
            type="text"
            autoComplete="username"
            ng-hide="true"
            readOnly
            hidden
          ></input>
        </Stack>
      </Container>
    </Flex>
  );
}

export default FormularioLogin;
