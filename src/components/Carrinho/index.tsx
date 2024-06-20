import { useSelector } from "react-redux"
import { ItemProps } from "../../types/Item"
import { RootState } from "../../redux/root-reducer"

interface ICarrinhoProps {
  produtos: ItemProps[]
}

export const Carrinho = () => {
  const { produtos }:ICarrinhoProps = useSelector((state: RootState) => state.carrinhoReducer)
  
  return (
    <div>
      <h1>Itens do carrinho</h1>
      { produtos.map(item => (
        <div key={item.name}>
          <h2>{item.name}</h2>
          <p>{item.quantidade}</p>
        </div>
      )) }
    </div>
  )
}