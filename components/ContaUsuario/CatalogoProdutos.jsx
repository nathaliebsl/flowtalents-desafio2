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
  Image,
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

  function renderTableData() {
    return products.map((product, index) => {
      const { id, name, descricao, relevancia, avatar } = product;
      return (
        <Tr key={id}>
          <Td textAlign="center">
            <Image
              borderRadius="full"
              boxShadow="md"
              boxSize="auto"
              alt="product"
              fallbackSrc="https://via.placeholder.com/150"
              scr={(toString(avatar))}
            ></Image>
          </Td>
          <Td textAlign="center">{id}</Td>
          <Td textAlign="center">{name}</Td>
          <Td textAlign="center">{descricao}</Td>
          <Td textAlign="center">{relevancia}</Td>
        </Tr>
      );
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
        <TableCaption>Catálogo de Produtos</TableCaption>
        <Thead>
          <Tr>
            <Th textAlign="center">""</Th>
            <Th textAlign="center">ID</Th>
            <Th textAlign="center">Produto</Th>
            <Th textAlign="center">Descrição</Th>
            <Th textAlign="center">Relevancia</Th>
            <Th textAlign="center">Favorito</Th>
          </Tr>
        </Thead>
        <Tbody>
          {renderTableData()}
          {/* <Tr>
            <Td textAlign="center">inches</Td>
            <Td textAlign="center">millimetres (mm)</Td>
            <Td textAlign="center">25.4</Td>
          </Tr>
          <Tr>
            <Td textAlign="center">feet</Td>
            <Td textAlign="center">centimetres (cm)</Td>
            <Td textAlign="center">30.48</Td>
          </Tr>
          <Tr>
            <Td textAlign="center">yards</Td>
            <Td textAlign="center">metres (m)</Td>
            <Td textAlign="center">0.91444</Td>
          </Tr> */}
        </Tbody>
        {/* <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot> */}
      </Table>
    </Box>
  );
}

export default CatalogoProdutosTeste;
