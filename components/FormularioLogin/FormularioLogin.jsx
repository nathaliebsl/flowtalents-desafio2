import React, {useEffect, useState} from "react";
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

function FormularioLogin() {
  const [user, setUser] = useState("viaflow");
  const [password, setPW] = useState(12345);
  
  function logUser(user, password) {
    console.log(user, password);
    fetch(`https://challenge-products-api.herokuapp.com/login`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        login: user,
        password: password
      }),
    }).then(() => {
      // setUser();
      // setPW();
    });
  }

  // useEffect(() => {
  //   logUser();
  // }, []);

  console.log(logUser(user, password));

  return (
    <Flex
      position="fixed"
      bottom="0"
      top="0"
      right="0"
      left="0"
      // display="flex"
      // justify="center"
      // align="center"
      // flexWrap="wrap"
      bgColor="rgb(27,60,227);
    background: radial-gradient(circle, rgba(27,60,227,1) 0%, rgba(19,12,77,1) 100%);"
      // margin="0"
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
      >
        <Image
          borderRadius="full"
          boxShadow="md"
          boxSize="50px"
          src="https://www.protectivelife.com.bd/images/icons/Signin.png"
          fallbackSrc="https://via.placeholder.com/150"
          alt="login vector"
        />
        <Text p="3"> Bem-vindo ao EstoqueFácil! </Text>
        <Stack h="auto" w="100%" spacing={2}>
          <InputGroup>
            <Input
              value={user}
              required
              box-sizing="content-box"
              type="user"
              placeholder="username"
            />
          </InputGroup>

          <InputGroup>
            <Input
            value={password}
              boxSizing="content-box"
              required
              type="senha"
              placeholder="senha"
            />
          </InputGroup>
          <InputGroup justifyContent="center">
            <Link className="login-link" href="/conta" as="/minhaconta">
              <Button w="50%">Login</Button>
            </Link>
          </InputGroup>
        </Stack>
      </Container>
    </Flex>
  );
}

export default FormularioLogin;
