import { useSelector } from "react-redux"
import { ItemProps } from "../../types/Item"
import { RootState } from "../../redux/root-reducer"
import { ItemCarrinho } from "../ItemCarrinho"

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
  
  return (
    <div>
      <h1>Carrinho</h1>
      { produtos.map(item => (
        <ItemCarrinho 
          key={item.payload.id}
          nome={item.payload.name}
          preco={item.valorAtualizado}
          quantidade={item.valorQuantidade}
          valorTotal={item.valorAtualizado}
        />
      )) }
    </div>
  )
}