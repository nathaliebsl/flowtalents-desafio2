
async function TesteApi(request, response) {

  const listaProdutos = await fetch("https://601b1b840ee87c001706b013.mockapi.io/products?");
  const listaProdutosJson = await listaProdutos.json();

  response.json({
      produtos: listaProdutosJson,
  })

}

export default TesteApi;