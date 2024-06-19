import { useDispatch } from "react-redux";
import { addProdutoAoCarrinho } from "../../redux/carrinho/actions";
import { ItemProps } from "../../types/Item";
import * as Style from "./styles";
import { conversorMoeda } from "../../utils/conversorModeda";

interface ICardItemProps {
  item: ItemProps
}

export const CardItem = ({ item }: ICardItemProps) => {
  const dispatch = useDispatch()

  const handleClickAddProduto = () => {
    dispatch(addProdutoAoCarrinho(item))
  }

  return (
    <Style.Container onClick={handleClickAddProduto}>
      <div className="containerInfos">
        <h1 className="titulo">{item.name}</h1>
        <p className="descricao">{item.description}</p>
        <p className="preco">{conversorMoeda(item.price)}</p>
      </div>
      { item?.images?.map(imagem => <img key={imagem.id} alt="Imagem da comida" src={imagem.image} className="imagem"/>) }
    </Style.Container>
  )
}