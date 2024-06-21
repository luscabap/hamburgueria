import { conversorMoeda } from "../../utils/conversorModeda";
import * as Style from "./styles";

interface IItemCarrinhoProps {
  nome: string,
  preco: number,
  quantidade: number,
  valorTotal: number
}

export const ItemCarrinho = ({ nome, quantidade, valorTotal }: IItemCarrinhoProps) => {
  return (
    <Style.Container>
      <div className="containerInfos">
        <h2 className="nomeItem">{nome}</h2>
        <p className="precoItem">{conversorMoeda(valorTotal)}</p>
      </div>
      <div className="containerQtd">
        <button>-</button>
        <input type="text" readOnly={true} value={quantidade}/>
        <button>+</button>
      </div>
    </Style.Container>
  )
}