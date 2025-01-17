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
        aria-label="feedback-menu-bar"
        border="1px"
        borderStyle="hidden"
        bgColor="rgb(27,60,227);
    background: radial-gradient(circle, rgba(27,60,227,1) 0%, rgba(19,12,77,1) 100%);"
        borderBottomRadius="base"
        m="0"
        p="3"
        overflow="scroll"
      >
        <Box mr="2" p="1">
          <Heading color="Highlight" fontStyle="italic" size="md">
            EstoqueFácil
          </Heading>
        </Box>
        <Spacer />
        <Wrap>
          <WrapItem>
            <Stack align="center" direction="row" color="whiteAlpha.800">
              <Link href="/contato" as="/">
                <Button
                 aria-label="feedback-link-button"
                  size="sm"
                  borderRadius="full"
                  variant="outline"
                  colorScheme="twitter"
                >
                  Contato
                </Button>
              </Link>
              <Spacer />
              <Button
                aria-label="logout-button"
                colorScheme="white"
                size="xs"
                variant="ghost"
              >
                <Avatar
                  mr="2"
                  size="sm"
                  bgColor="Highlight"
                  color="black"
                  name="Via Flow"
                />
                <Text textTransform="uppercase">ViaFlow</Text>
              </Button>
            </Stack>
          </WrapItem>
        </Wrap>
      </Flex>
    </>
  );
}

export default ContaUsuario;
