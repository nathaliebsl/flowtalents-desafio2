
const listarProdutos = () => { 
    return fetch("https://601b1b840ee87c001706b013.mockapi.io/products")
    .then(res => { return res.json()
    })
    .then (json => {
      return json;
    })
}


export {
  listarProdutos,
  
}
