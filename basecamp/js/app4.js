let comprarProdutos = new Promise((resolve, reject) => {
  setTimeout(() => {
    let products = ['Camisa', 'Sapato', 'Calça']
    resolve(products)
  }, 3000)
  
})

comprarProdutos.then((products) => {
    console.log('produtos comprados:', products);
}).catch((error) => {
    console.log(error);
})