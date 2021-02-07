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
import easyWhImg from "../../assets/img/easywh";

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
          <Heading fontStyle="italic"  color="Highlight" size="md">
            EstoqueFácil
          </Heading>
        </Box>
        <Spacer />
        <Wrap>
          <WrapItem>
            <Stack align="center" direction="row" color="whiteAlpha.800">
              <Link href="/conta" as="/minhaconta">
                <Button borderRadius="full" variant="outline" colorScheme="twitter" mr="2">
                  Minha Conta
                </Button>
              </Link>
              <Button  size="sm" colorScheme="white" variant="ghost" >
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

export default ContatoUsuario;
