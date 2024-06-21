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