enum CarrinhoActionTypes {
  ADD_PRODUTO = 'carrinho/addProduto'
}

interface AddProduto {
  type: CarrinhoActionTypes.ADD_PRODUTO;
}

export type ItemCarrinhoProps = AddProduto;

export default CarrinhoActionTypes;