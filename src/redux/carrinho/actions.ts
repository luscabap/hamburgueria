import CarrinhoActionTypes from "./action-types";

export const addProdutoAoCarrinho = (payload) =>  ({
  type: CarrinhoActionTypes.ADD_PRODUTO,
  payload
})