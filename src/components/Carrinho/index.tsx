import { useSelector } from "react-redux"
import { ItemProps } from "../../types/Item"
import { RootState } from "../../redux/root-reducer"
import { ItemCarrinho } from "../ItemCarrinho"
import { selectProductsCount, selectQuantityProducts, selectTotalValueProducts } from "../../redux/carrinho/cart.selectors"

type produtos = {
  payload: ItemProps,
  valorAtualizado: number,
  valorQuantidade: number
}

interface ICarrinhoProps {
  produtos: produtos[]
}

export const Carrinho = () => {
  const { produtos }:ICarrinhoProps = useSelector((state: RootState) => state.carrinhoReducer); 

  const quantidadeProdutos = useSelector(selectQuantityProducts);
  const quantidadeTotal = useSelector(selectTotalValueProducts);

  return (
    <div>
      <h1>Carrinho ({quantidadeProdutos})</h1>
      { produtos.map(item => (
        <ItemCarrinho 
          key={item.payload.id}
          nome={item.payload.name}
          preco={item.valorAtualizado}
          quantidade={item.valorQuantidade}
          valorTotal={item.valorAtualizado}
          id={item.payload.id}
        />
      )) }
      <h2>Total: {quantidadeTotal}</h2>
    </div>
  )
}