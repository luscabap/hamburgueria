export const selectQuantityProducts = (rootReducer) => {
  return rootReducer.carrinhoReducer.produtos.reduce((acc, curr) => acc + curr.valorQuantidade ,0)
}

export const selectTotalValueProducts = (rootReducer) => {
  return rootReducer.carrinhoReducer.produtos.reduce((acc, curr) => acc + (curr.valorQuantidade * curr.payload.price) ,0)
}