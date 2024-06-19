import { useSelector } from "react-redux"

export const Carrinho = () => {
  const { produtos } = useSelector(rootReducer => rootReducer.carrinhoReducer)
  return (
    <div>
      <h1>Itens do carrinho</h1>
      { produtos.map(item => <div key={item.name}>{item.name}</div>) }
    </div>
  )
}