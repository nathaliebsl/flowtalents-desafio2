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
  ButtonGroup,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, StarIcon } from "@chakra-ui/icons";

function CatalogoProdutos() {
  const [products, setProducts] = useState([]);
  const [favorito, setFavorito] = useState();

  function getProducts() {
    fetch("https://challenge-products-api.herokuapp.com/produtos")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setProducts(json);
      });
  }

  //{ * função pronta para receber propriedade favoritos do Backend *}

  // function getFavoritos() {
  //   fetch("https://601b1b840ee87c001706b013.mockapi.io/products")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((json) => {
  //       setFavoritos(json);
  //       console.log(json);
  //     });
  // }

  function isFavorito(e, id) {
    // console.log(e, id);
    fetch(`https://601b1b840ee87c001706b013.mockapi.io/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        favorito: e,
      }),
    }).then(() => {
      // setFavoritos();
    });
  }

  function isRelevant(e, product) {
    console.log(e, product.id);
    fetch(
      `https://challenge-products-api.herokuapp.com/produtos/${product.id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          ...product,
          rating: parseInt(product.rating) + 1,
        }),
      }
    ).then(() => {
      getProducts();
    });
  }

  useEffect(() => {
    getProducts();
  }, []);

  function renderTableData() {
    return products.map((product) => {
      const { id, title, description, rating, image, category } = product;
      return (
        <Tr key={id}>
          <Td textAlign="center">
            <Image
              borderRadius="base"
              boxShadow="md"
              boxSize=""
              maxW="20"
              maxH="16"
              alt="product"
              fallbackSrc="https://www.rastanley.com.au/img/products/NoImageLarge.png"
              src={image}
            ></Image>
          </Td>
          <Td textAlign="center">{id}</Td>
          <Td textAlign="center">{title}</Td>
          <Td textAlign="center">{category}</Td>
          <Td textAlign="center">{description}</Td>
          <Td textAlign="center">
            <ButtonGroup size="sm" variant="outline">
              <Button
                aria-label="add-relevancia"
                borderStyle="hidden"
                mr="-px"
                leftIcon={<StarIcon mb="3px" mt="1px" color="goldenrod" />}
              >
                {rating}
              </Button>
              <IconButton
                onClick={(event) => {
                  isRelevant(event, product);
                }}
                aria-label="product-add-relevance"
                icon={<AddIcon />}
              />
            </ButtonGroup>
          </Td>
          <Td textAlign="center">
            <Checkbox
            aria-label="product-set-favourite"
              onChange={(event) => {
                setFavorito(event.target.checked);
                isFavorito(event.target.checked, id);
              }}
              checked={favorito}
              colorScheme="green"
            ></Checkbox>
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
      mb="10"
      borderRadius="2xl"
      borderWidth="1px"
      borderRadius="base"
      overflow="scroll"
    >
      <Table aria-label="products-table" variant="simple">
        <TableCaption
          fontSize="lg"
          borderBottomRadius="base"
          placement="top"
          m="0"
        >
          Catálogo de Produtos
        </TableCaption>
        <Thead>
          <Tr>
            <Th textAlign="center"></Th>
            <Th textAlign="center">ID</Th>
            <Th textAlign="center">Produto</Th>
            <Th textAlign="center">Categoria</Th>
            <Th textAlign="center">Descrição</Th>
            <Th textAlign="center">Relevância</Th>
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
            <Th>Add relevância</Th>
            <Th>Selecione</Th>
          </Tr>
        </Tfoot>
      </Table>
    </Box>
  );
}

export default CatalogoProdutos;
