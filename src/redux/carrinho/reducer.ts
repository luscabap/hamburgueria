import { ItemProps } from "../../types/Item";
import CarrinhoActionTypes, { ItemCarrinhoProps } from "./action-types";

type ReduxProps = {
  payload: ItemProps,
  id: number,
  valorAtualizado: number,
  valorQuantidade: number
}

interface ICarrinhoProps {
  produtos: ReduxProps[] | []
}

const initialState: ICarrinhoProps = {
  produtos: [],
}

const carrinhoReducer = (state = initialState, action) => {
  const produtoEstaNoCarrinho = state.produtos.some(produto => produto.id === action.payload.id);

  switch (action.type) {
    case CarrinhoActionTypes.ADD_PRODUTO:
    if (produtoEstaNoCarrinho){
      return { 
        ...state, 
        produtos: state.produtos.map(
        produto => produto.id === action.payload.id 
          ? { 
              ...produto,
              valorAtualizado: produto.valorAtualizado + action.payload.valorAtualizado,
              valorQuantidade: produto.valorQuantidade + action.payload.valorQuantidade 
          } 
          : produto
        ),
      }
    }
    return {
      ...state,
      produtos: [ ...state.produtos, { ...action.payload, valorQuantidade: action.payload.valorQuantidade }],
    }

    default:
      return state;
  }
}

export default carrinhoReducer;