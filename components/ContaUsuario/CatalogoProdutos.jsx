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
  const [relevancia, setRelevancia] = useState();
  const [clicks, setClicks] = useState(0);

  function getProducts() {
    fetch("https://601b1b840ee87c001706b013.mockapi.io/products")
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
    fetch(`https://601b1b840ee87c001706b013.mockapi.io/products/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        ...product,
        relevancia: parseInt(product.relevancia) +1,
      }),
    }).then(() => {
      setRelevancia();
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
          <Td textAlign="center">
            <ButtonGroup size="sm" isAttached variant="outline">
              <Button mr="-px">{relevancia}</Button>
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
