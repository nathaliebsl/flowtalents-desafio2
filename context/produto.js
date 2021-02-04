import React from "react";

const produtoArray = React.createContext({
    id: "",
    name: "",
    avatar: "http://lorempixel.com/640/480/abstract",
    relevancia: [],
    favorito: false,
    descricao: "",
    categoria: ""
});

// function semValidacao(dados) {
//   console.log(dados);
//   return { valido: true, texto: "" };
// }

export default produtoArray;
