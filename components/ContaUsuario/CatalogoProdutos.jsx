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
import { AddIcon } from "@chakra-ui/icons";

function CatalogoProdutos() {
  const [products, setProducts] = useState([]);
  const [favorito, setFavorito] = useState(false);
  const [rating, setRating] = useState();

  function getProducts() {
    fetch("https://challenge-products-api.herokuapp.com/produtos")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setProducts(json);
      });
  }

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

  function isRelevant(e, product) {
    console.log(e, product.id);
    fetch(`https://challenge-products-api.herokuapp.com/produtos/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        ...product,
        rating: parseInt(product.rating) +1,
      }),
    }).then(() => {
      setRating();
      getProducts();
    });
  }

  // function isRelevant(e, id) {
  //   console.log(e, id);
  //   fetch(`https://601b1b840ee87c001706b013.mockapi.io/products/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       // ...relevancia,
  //       relevancia: e,
  //     }),
  //   }).then(() => {
  //     setRelevancia();
  //   });
  // }

  // function SimpleRating(relevancia) {
  //   return (
  //     <Box component="fieldset" mb={3} borderColor="transparent">
  //       <Typography component="legend"></Typography>
  //       <Rating
  //         name="simple-controlled"
  //         defaultValue={0}
  //         value={relevancia}
  //         onChange={(event, newValue) => {
  //           isRelevant(event.target.value, newValue);
  //         }}
  //       />
  //     </Box>
  //   );
  // }

  useEffect(() => {
    getProducts();
  }, []);

  function renderTableData() {
    // const toast = useToast()
    return products.map((product) => {
      const {
        id,
        title,
        description,
        rating,
        image,
        category,
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
              src={image}
            ></Image>
          </Td>
          <Td textAlign="center">{id}</Td>
          <Td textAlign="center">{title}</Td>
          <Td textAlign="center">{category}</Td>
          <Td textAlign="center">{description}</Td>
          <Td textAlign="center">
            <ButtonGroup size="sm" isAttached variant="outline">
              <Button mr="-px">{rating}</Button>
              <IconButton
                onClick={(event) => {
                  isRelevant(event, product)
                }
                }
                aria-label="Add relevância"
                icon={<AddIcon />}
              />
            </ButtonGroup>
          </Td>
          <Td textAlign="center">
            <Checkbox
              onChange={(event) => {
                console.log(id);
                isFavorito(event.target.checked, id);
              }}
              defaultChecked={favorito}
              checked={favorito}
              colorScheme="red"
              border="ButtonHighlight"
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
