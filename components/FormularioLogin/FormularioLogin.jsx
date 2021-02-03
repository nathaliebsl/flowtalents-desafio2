import React from "react";
import {
  Flex,
  Container,
  Input,
  Stack,
  InputGroup,
  Button,
  Image,
  Grid,
 
} from "@chakra-ui/react";

function FormularioLogin() {


  return (
    <Flex  position="static" display="flex" justify="center" align="center" flexWrap="wrap" bgColor="black"
    >
      <Container 
        p="14"
        margin="32"
        position="center"
        display="flex"
        border="2px"
        borderRadius="base"
        borderStyle="solid"
        maxW="sm"
        minW="sm"
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
        Bem-vindo ao EstoqueFacil!
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
          <Button onCLick="">Login</Button>
        </Stack>
      </Container>
      </Flex>
  );
}

export default FormularioLogin;
