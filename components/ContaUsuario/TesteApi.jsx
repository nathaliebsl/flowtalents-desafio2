// export async function getStaticProps() {
//     // Call an external API endpoint to get posts
//     const res = await fetch(
//       "https://601b1b840ee87c001706b013.mockapi.io/products"
//     );
//     const produtos = await res.json();

//     if (!produtos) {
//         return {
//           notFound: true,
//         }
//       } 
//       console.log(produtos)
    
//       return {
//       props: {
//         products: produtos
//       },
//     };
//   }

//   function getProduto(request, response) {
//     axios.request({
//       method: 'get',
//       url: `https://601b1b840ee87c001706b013.mockapi.io/products?`
//     }).then((response) => {
//       setProduto({...produtos, products: response.data.items}, () => {
//         console.log(...produtos);
//         response.json({
//             products
//         })
//       })
//     }).catch((error) => {
//       console.log(error);
//     });
//   }

  
//     return (

//         <>
//         <h1>API</h1>

//         </> 
//     )




// export default TesteApi;