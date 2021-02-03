import React from "react";

import {
  Flex,
  Box,
  Spacer,
  Heading,
  Button,
  Avatar,
  Wrap,
  WrapItem,
  Text,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";

function ContatoUsuario() {
  return (
    <>
      <Flex
        border="1px"
        borderStyle="hidden"
        bgColor="rgb(27,60,227);
    background: radial-gradient(circle, rgba(27,60,227,1) 0%, rgba(19,12,77,1) 100%);"
        borderBottomRadius="base"
        m="0"
        p="2"
      >
        <Box p="2">
          <Heading color="white" size="md">
            Estoque Fácil
          </Heading>
        </Box>
        <Spacer />
        <Wrap>
          <WrapItem>
            <Stack align="center" direction="row" color="whiteAlpha.800">
              <Link href="/conta" as="/minhaconta">
                <Button colorScheme="white" mr="2">Minha Conta</Button>
              </Link>
              <Avatar
                size="sm"
                bgColor="black"
                color="Highlight"
                name="Nathalie"
              />
              <Text>Nathalie</Text>
            </Stack>
          </WrapItem>
        </Wrap>
      </Flex>
    </>
  );
}

export default ContatoUsuario;
