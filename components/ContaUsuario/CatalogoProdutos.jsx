import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Wrap,
  Flex,
  WrapItem,
  Center,
  Box,
} from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  useTable,
  useSortBy,
  useAbsoluteLayout,
  useFlexLayout,
} from "react-table";

function CatalogoProdutos() {
  const data = React.useMemo(
    () => [
      {
        setIMG: "img",
        getID: "id",
        getProduto: "Produto",
        getCategoria: "Categoria",
        getRelevancia: "Relevancia",
        setFavorito: "Favorito",
      },
      {
        setIMG: "img",
        getID: "id",
        getProduto: "Produto",
        getCategoria: "Categoria",
        getRelevancia: "Relevancia",
        setFavorito: "Favorito",
      },
      {
        setIMG: "img",
        getID: "id",
        getProduto: "Produto",
        getCategoria: "Categoria",
        getRelevancia: "Relevancia",
        setFavorito: "Favorito",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "",
        accessor: "setIMG",
      },
      {
        Header: "ID",
        accessor: "getID",
        inNumeric: true,
      },
      {
        Header: "Produto",
        accessor: "getProduto",
      },
      {
        Header: "Categoria",
        accessor: "getCategoria",
      },
      {
        Header: "Relevancia",
        accessor: "getRelevancia",
      },
      {
        Header: "Favorito",
        accessor: "setFavorito",
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
      bgColor="Menu"
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
                <Th textAlign="center"
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
                  <Td textAlign="center"
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
