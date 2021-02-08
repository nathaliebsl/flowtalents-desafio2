import React, { useEffect, useState } from "react";
import {
  Flex,
  Container,
  Input,
  Stack,
  InputGroup,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import loginImg from "../../assets/img/login.js"

function FormularioLogin() {
  const [user, setUser] = useState("");
  const [password, setPW] = useState("");

  function logUser(e, user, password) {
    console.log(e, user, password);
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
      console.log(response)
      console.log(response.redirected);
      console.log(response.status);
      return response.status;
      
    }).then((status) => {
      console.log(status)
      setUser("");
      setPW("");
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
      >{loginImg()}
        <Text p="3"> Bem-vindo ao EstoqueFácil! </Text>
        <Stack onSubmit={(event) => {
            event.preventDefault();
            event.stopPropagation();
            logUser(event, user, password)
          }} as="form" h="auto" w="100%" spacing={2}>
          <InputGroup>
            <Input
              value={user}
              onChange={(event) => {
                setUser(event.target.value);
              }}
              isRequired
              box-sizing="content-box"
              type="user"
              placeholder="username: viaflow"
            />
          </InputGroup>

          <InputGroup>
            <Input
              value={password}
              onChange={(event) => {
                setPW(event.target.value);
              }}
              boxSizing="content-box"
              isRequired
              type="senha"
              placeholder="senha: 12345"
            />
          </InputGroup>
          <InputGroup justifyContent="center">
            {/* <Link className="login-link" href="/conta" as="/minhaconta"> */}
              <Button type="submit" w="50%">
                Login
              </Button>
            {/* </Link> */}
          </InputGroup>
        </Stack>
      </Container>
    </Flex>
  );
}

export default FormularioLogin;
