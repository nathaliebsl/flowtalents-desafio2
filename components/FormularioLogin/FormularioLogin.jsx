import React from "react";
import {
  Flex,
  Box,
  Text,
  Container,
  Input,
  Stack,
  InputGroup,
  Button,
  Image,
} from "@chakra-ui/react";

function FormularioLogin() {
  return (
    <Flex align="center" wrap="wrap">
      <Container
        margin="auto"
        display="flex"
        flex=""
        centerContent="true"
        position="center"
      >
        <Container
          position="center"
          p="14"
          margin="24"
          position="fixed"
          display="block"
          border="2px"
          borderRadius="base"
          borderStyle="solid"
          maxW="md"
          minW="sm"
          w="65%"
          h="65%"
        
        >
          <Image
          
            borderRadius="full"
            boxShadow="md"
            boxSize="50px"
            src="https://www.flaticon.com/svg/vstatic/svg/295/295128.svg?token=exp=1612300312~hmac=632d9c8c9109180c57e9dd001095696c"
            alt="login vector"
          />
          Bem-vindo ao EstoqueFacil!
          <Stack h="auto" w="auto" justify="center" align="center" spacing={3}>
            <InputGroup>
              <Input
                required
                box-sizing="content-box"
                type="user"
                placeholder="usuário"
              />
            </InputGroup>

            <InputGroup>
              <Input  required type="senha" placeholder="senha" />
            </InputGroup>
            <Button onCLick="">Login</Button>
          </Stack>
        </Container>
      </Container>
    </Flex>
  );
}

export default FormularioLogin;
