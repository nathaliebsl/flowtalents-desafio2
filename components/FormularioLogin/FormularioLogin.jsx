import React from "react";
import {
  Flex,
  Container,
  Input,
  Stack,
  InputGroup,
  Button,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

function FormularioLogin() {
  return (
    <Flex
      position="static"
      display="flex"
      justify="center"
      align="center"
      flexWrap="wrap"
      bgColor="rgb(27,60,227);
    background: radial-gradient(circle, rgba(27,60,227,1) 0%, rgba(19,12,77,1) 100%);"
      margin="0"
      height="2xl"
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
        Bem-vindo ao EstoqueFácil!
        <Stack h="auto" w="100%" justify="center" align="center" spacing={3}>
          <InputGroup>
            <Input
              required
              box-sizing="content-box"
              type="user"
              placeholder="username"
            />
          </InputGroup>

          <InputGroup>
            <Input required type="senha" placeholder="senha" />
          </InputGroup>
          <Link href="/usuario" >
            <a>
            <Button>Login</Button>
            </a>
          </Link>
        </Stack>
      </Container>
    </Flex>
  );
}

export default FormularioLogin;
