import CarrinhoActionTypes from "./action-types";
import { ItemProps } from "../../types/Item"

const initialState = {
  produtos: [],
}

const carrinhoReducer = (state = initialState, action) => {
  const produtoEstaNoCarrinho = state.produtos.some(produto => produto.id === action.payload.id);

  switch (action.type) {
    case CarrinhoActionTypes.ADD_PRODUTO:

    if (produtoEstaNoCarrinho){
      return { ...state, produtos: state.produtos.map(
        produto => produto.id === action.payload.id 
          ? { ...produto, quantidade: produto.quantidade + 1 } 
          : produto
        )
      }
    }
    return {
      ...state,
      produtos: [ ...state.produtos, { ...action.payload, quantidade: 1 } ]
    }

    default:
      return state;
  }
}

export default carrinhoReducer;