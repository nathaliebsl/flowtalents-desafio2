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

function ContaUsuario() {
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
            EstoqueFácil
          </Heading>
        </Box>
        <Spacer />
        <Wrap >
          <WrapItem>
            <Stack align="center" direction="row" color="whiteAlpha.800"> 
            <Link href="/contato">
              <Button colorScheme="white" mr="2">
                Contato
              </Button>
              </Link> 
              <Avatar size="sm" bgColor="black" color="Highlight"  name="Via Flow" />
              <Text >ViaFlow</Text>
            </Stack>
          </WrapItem>
        </Wrap>
      </Flex>
    </>
  );
}

export default ContaUsuario;
