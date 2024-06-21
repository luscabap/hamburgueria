enum CarrinhoActionTypes {
  ADD_PRODUTO = 'carrinho/addProduto',
  REMOVE_PRODUTO = 'carrinho/removeProduto',
  INCREASE_PRODUTO = 'carrinho/incrementarProduto',
  DECREASE_PRODUTO = 'carrinho/decrementarProduto'
}

interface AddProduto {
  type: CarrinhoActionTypes.ADD_PRODUTO;
}

export type ItemCarrinhoProps = AddProduto;

export default CarrinhoActionTypes;