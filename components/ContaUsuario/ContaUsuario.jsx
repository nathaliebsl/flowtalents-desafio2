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
        overflow="scroll"
      >
        <Box p="2">
          <Heading color="Highlight" fontStyle="italic" size="md">
            EstoqueFácil
          </Heading>
        </Box>
        <Spacer />
        <Wrap >
          <WrapItem>
            <Stack align="center" direction="row" color="whiteAlpha.800"> 
            <Link href="/contato"  as="/minhassugestoes"  >
              <Button borderRadius="full" variant="outline" colorScheme="twitter" >
                Contato
              </Button>
              </Link> 
              <Button colorScheme="white" size="sm"  variant="ghost" >
              <Avatar
                mr="2"
                size="sm"
                bgColor="Highlight"
                color="black"
                name="Via Flow"
              />
              <Text>ViaFlow</Text>
              </Button>
            </Stack>
          </WrapItem>
        </Wrap>
      </Flex>
    </>
  );
}

export default ContaUsuario;
