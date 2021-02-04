import React, {useState} from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Box,
  Link,
} from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { useTable, useSortBy } from "react-table";
import axios from "axios";
import { getDisplayName } from "next/dist/next-server/lib/utils";
import produtoArray from "../../context/produto";

function CatalogoProdutos() {
    const [produtos, setProdutos] = useState({});
    
    async function catalogo(request, response) {


    const listaProdutos = await fetch("https://601b1b840ee87c001706b013.mockapi.io/products?");
    const listaProdutosJson = await listaProdutos.json();

                response.json({
                    produtos: listaProdutosJson
                })
              
          
            return listaProdutosJson

  }

//   const data = React.useMemo(
        const data = produtos.forEach(product =>  {
        [ 
      {
        id: product.id,
        img: product.img,
        name: product.name,
        categoria: product.categoria,
        relevancia: product.relevancia,
        favorito: product.favorito,
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "",
        accessor: "avatar",
      },
      {
        Header: "ID",
        accessor: "id",
        inNumeric: true,
      },
      {
        Header: "Produto",
        accessor: "name",
      },
      {
        Header: "Categoria",
        accessor: "categoria",
      },
      {
        Header: "Relevancia",
        accessor: "relevancia",
      },
      {
        Header: "Favorito",
        accessor: "favorito",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

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
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th
                  textAlign="center"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  isNumeric={column.isNumeric}
                >
                  {column.render("Header")}
                  <chakra.span pl="1">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <TriangleDownIcon aria-label="sorted descending" />
                      ) : (
                        <TriangleUpIcon aria-label="sorted ascending" />
                      )
                    ) : null}
                  </chakra.span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td
                    textAlign="center"
                    {...cell.getCellProps()}
                    isNumeric={cell.column.isNumeric}
                  >
                    {cell.render("Cell")}
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}

export default CatalogoProdutos;
