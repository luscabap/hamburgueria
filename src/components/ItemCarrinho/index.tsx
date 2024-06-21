import { useDispatch } from "react-redux";
import { conversorMoeda } from "../../utils/conversorModeda";
import * as Style from "./styles";
import { decreaseProdutoDoCarrinho, increaseProdutoDoCarrinho, removeProdutoDoCarrinho } from "../../redux/carrinho/actions";

interface IItemCarrinhoProps {
  nome: string,
  preco: number,
  quantidade: number,
  valorTotal: number,
  id: number
}

export const ItemCarrinho = ({ nome, quantidade, valorTotal, id }: IItemCarrinhoProps) => {
  const dispatch = useDispatch();

  const handleClickDeleteItem = () => {
    dispatch(removeProdutoDoCarrinho(id))
  }

  const handleClickIncreaseItem = () => {
    dispatch(increaseProdutoDoCarrinho(id));
  }

  const handleClickDecreaseItem = () => {
    dispatch(decreaseProdutoDoCarrinho(id))
  }

  return (
    <Style.Container>
      <div className="containerInfos">
        <h2 className="nomeItem">{nome}</h2>
        <p className="precoItem">{conversorMoeda(valorTotal)}</p>
      </div>
      <div className="containerQtd">
        { quantidade <= 1 
        ? <button onClick={handleClickDeleteItem}>X</button> 
        : <button onClick={handleClickDecreaseItem}>-</button>
        }
        <input type="text" readOnly={true} value={quantidade}/>
        <button onClick={handleClickIncreaseItem}>+</button>
      </div>
    </Style.Container>
  )
}