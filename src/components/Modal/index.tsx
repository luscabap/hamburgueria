import { useDispatch } from "react-redux";
import { ItemProps } from "../../types/Item";
import * as Style from "./style";
import { addProdutoAoCarrinho } from "../../redux/carrinho/actions";
import { conversorMoeda } from "../../utils/conversorModeda";

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
          
        </div>
        { item.modifiers && (
          <div className="containerEscolha">
            <h2 className="subtitulo">{ item.modifiers[0]!.name }</h2>
            <p className="selecionarOpcao">Select 1 option</p>
            <div>
              { item.modifiers[0]!.items.map(opcao => (
                <form key={opcao.id}>
                  {opcao.available && (
                    <div className="containerOpcao">
                      <div className="containerOpcao__Infos">
                        <label htmlFor={String(opcao.id)} className="containerOpcao__Infos__labelMeat">{opcao.name}</label>
                        <label htmlFor={String(opcao.id)} className="containerOpcao__Infos__labelPrice">{conversorMoeda(opcao.price)}</label>
                      </div>
                      <input type="radio" id={String(opcao.id)} className="containerOpcao__input"/>
                    </div>
                  )}
                </form>
              )) }
            </div>
          </div>)
        }
        <button 
            onClick={() => handleClickAddProduto()}
            className="botaoAdicionarCarrinho"
        >Add to Order - $ {item.price}</button>

      </Style.ContainerModal>
    </Style.BackgroundModal>
  )
}