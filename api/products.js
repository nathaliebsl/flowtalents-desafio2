
// const listarProdutos = () => { 
//     return fetch("https://601b1b840ee87c001706b013.mockapi.io/products")
//     .then(res => { return res.data.json()
//     })
//     .then (json => {
//       return json;
//     })
// }

// const editaProduto = (id, favorito, relevancia) => {
//   const json = JSON.stringify({
//     favorito: favorito,
//     relevancia: relevancia
//   })
//   return fetch(`https://601b1b840ee87c001706b013.mockapi.io/products/${id}`, {
//     method: 'PUT', 
//     headers: {
//       'Content-type': 'application/json'
//   },
  
//   body: json

//   })
// }


// export {
//   listarProdutos,
//   editaProduto,
  
// }
