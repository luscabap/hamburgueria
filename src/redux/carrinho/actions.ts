import { ItemProps } from "../../types/Item";
import CarrinhoActionTypes from "./action-types";

export const addProdutoAoCarrinho = (payload: ItemProps, valorQuantidade: number, valorAtualizado: number) => ({
  type: CarrinhoActionTypes.ADD_PRODUTO,
  payload: {
    payload,
    id: payload.id,
    valorQuantidade,
    valorAtualizado
  }
})

export const removeProdutoDoCarrinho = (id: number) => ({
  type: CarrinhoActionTypes.REMOVE_PRODUTO,
  payload: {
    id
  }
})

export const increaseProdutoDoCarrinho = (id: number) =>( {
  type: CarrinhoActionTypes.INCREASE_PRODUTO,
  payload: {
    id
  }
})

export const decreaseProdutoDoCarrinho = (id: number ) => ({
  type: CarrinhoActionTypes.DECREASE_PRODUTO,
  payload: {
    id
  }
})