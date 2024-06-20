import { ItemProps } from "../../types/Item";
import CarrinhoActionTypes from "./action-types";

export const addProdutoAoCarrinho = (payload: ItemProps) =>  ({
  type: CarrinhoActionTypes.ADD_PRODUTO,
  payload
})