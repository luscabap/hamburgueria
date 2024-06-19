import { useDispatch } from "react-redux";
import { ItemProps } from "../../types/Item";
import * as Style from "./style";
import { addProdutoAoCarrinho } from "../../redux/carrinho/actions";

interface IModalProps {
  item: ItemProps
  modalIsOpen: boolean,
  closeModal: () => void
}

export const Modal = ({ item, modalIsOpen, closeModal }: IModalProps) => {
  const dispatch = useDispatch();
  
  const handleClickAddProduto = () => {
    dispatch(addProdutoAoCarrinho(item))
    closeModal();
  }

  if (!modalIsOpen) return <></>

  return (
    <Style.BackgroundModal>
      <Style.ContainerModal>
        <button onClick={closeModal} className="botaoFecharModal">X</button>
        <img 
          src="https://preodemo.gumlet.io/usr/venue/7602/section/646fbe4c64a6f.png" 
          alt={`Imagem da comida ${item.name}`}
          className="imagemComida"
        />
        <div className="containerInfos">
          <div>
            <h1 className="titulo">{item.name}</h1>
            <p className="descricao">{item.description}</p>
          </div>
          <button 
            onClick={() => handleClickAddProduto()}
            className="botaoAdicionarCarrinho"
          >Add to Order - $ {item.price}</button>
        </div>
      </Style.ContainerModal>
    </Style.BackgroundModal>
  )
}