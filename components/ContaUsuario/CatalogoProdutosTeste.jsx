import React, { useState, useEffect } from "react";
import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Box,
} from "@chakra-ui/react";

function CatalogoProdutosTeste() {
  const [products, setProducts] = useState([]);

  function getProducts() {
    fetch("https://601b1b840ee87c001706b013.mockapi.io/products")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setProducts(json);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box
      bgColor="whiteAlpha.100"
      mt="10"
      mr="2"
      ml="2"
      borderRadius="base"
      borderWidth="1px"
      borderRadius="lg"
      overflow="scroll"
    >
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>""</Th>
            <Th isNumeric>ID</Th>
            <Th>Produto</Th>
            <Th>Descrição</Th>
            <Th>Relevancia</Th>
            <Th>Favorito</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </Box>
  );
}

export default CatalogoProdutosTeste;
