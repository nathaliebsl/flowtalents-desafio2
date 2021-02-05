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
  Checkbox,
  Image,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";

function CatalogoProdutos() {
  const [products, setProducts] = useState([]);
  const [favorito, setFavorito] = useState(false);

  function getProducts() {
    fetch("https://601b1b840ee87c001706b013.mockapi.io/products")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setProducts(json);
      });
  }

  //   const prodsById = products.map(product => {
  //     const container = {};

  //     container.id = product.id;
  //     container.favorito = product.favorito;

  //     return container;
  // })

  //     console.log(prodsById);

  function isFavorito(e, id) {
    console.log(e, id);
    fetch(`https://601b1b840ee87c001706b013.mockapi.io/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        favorito: e,
      }),
    }).then(() => {
      setFavorito();
    });
  }

  useEffect(() => {
    getProducts();
    // isFavorito();
  }, []);

  function renderTableData() {
    return products.map((product, index) => {
      const {
        id,
        name,
        descricao,
        relevancia,
        avatar,
        categoria,
        favorito,
      } = product;
      return (
        <Tr key={id}>
          <Td textAlign="center">
            <Image
              borderRadius="base"
              boxShadow="md"
              boxSize=""
              maxW="16"
              maxH="16"
              alt="product"
              fallbackSrc="https://www.rastanley.com.au/img/products/NoImageLarge.png"
              src={avatar}
            ></Image>
          </Td>
          <Td textAlign="center">{id}</Td>
          <Td textAlign="center">{name}</Td>
          <Td textAlign="center">{categoria}</Td>
          <Td textAlign="center">{descricao}</Td>
          <Td textAlign="center">{relevancia}</Td>
          <Td textAlign="center">
            <Checkbox
              onChange={(event) => {
                isFavorito(event.target.checked, id);
              }}
              defaultChecked={favorito}
              checked={favorito}
              colorScheme="red"
              border="ButtonHighlight"
            >
            </Checkbox>
          </Td>
        </Tr>
      );
    });
  }

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
            <Th textAlign="center"></Th>
            <Th textAlign="center">ID</Th>
            <Th textAlign="center">Produto</Th>
            <Th textAlign="center">Categoria</Th>
            <Th textAlign="center">Descrição</Th>
            <Th textAlign="center">Relevancia</Th>
            <Th textAlign="center">Favorito</Th>
          </Tr>
        </Thead>
        <Tbody>{renderTableData()}</Tbody>
        <Tfoot>
          <Tr>
            <Th></Th>
            <Th></Th>
            <Th></Th>
            <Th></Th>
            <Th></Th>
            <Th>Selecione</Th>
            <Th>Selecione</Th>
          </Tr>
        </Tfoot>
      </Table>
    </Box>
  );
}

export default CatalogoProdutos;
