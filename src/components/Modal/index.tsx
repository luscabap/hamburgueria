import { useDispatch } from "react-redux";
import { ItemProps } from "../../types/Item";
import * as Style from "./style";
import { addProdutoAoCarrinho } from "../../redux/carrinho/actions";
import { conversorMoeda } from "../../utils/conversorModeda";
import { useState } from "react";

interface IModalProps {
  item: ItemProps
  modalIsOpen: boolean,
  closeModal: () => void
}

export const Modal = ({ item, modalIsOpen, closeModal }: IModalProps) => {
  const [valorQuantidade, setValorQuantidade] = useState(1);

  const dispatch = useDispatch();

  const resetNumberQtd = () => {
    setValorQuantidade(1)
  }

  const handleClickAddProduto = () => {
    dispatch(addProdutoAoCarrinho(item, valorQuantidade, valorAtualizado));
    closeModal();
    resetNumberQtd();
  }

  if (!modalIsOpen) return <></>

  const opcoes_lanche = item.modifiers ? "true" : "false";

  const valorAtualizado = (item.price * valorQuantidade);

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
            <form>
              { item.modifiers[0]!.items.map(opcao => (
                <div key={opcao.id}>
                  {opcao.available && (
                    <div className="containerOpcao">
                      <div className="containerOpcao__Infos">
                        <label htmlFor={opcao.name}>
                          <p className="containerOpcao__Infos__labelMeat">{opcao.name}</p>
                          <p className="containerOpcao__Infos__labelPrice">{conversorMoeda(opcao.price)}</p>
                        </label>
                        <input 
                          type="radio" 
                          id={opcao.name} 
                          name="opcao"
                          value={opcao.name}
                          className="containerOpcao__input"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )) }
            </form>
          </div>)
        }

        <Style.ContainerQuantidade valor={valorQuantidade} >
          <label onClick={() => setValorQuantidade(prev => prev - 1)} className="labelDecrementar">-</label>
          <input type="text" value={valorQuantidade} readOnly={true}/>
          <label onClick={() => setValorQuantidade(prev => prev + 1)}>+</label>
        </Style.ContainerQuantidade>

        <Style.BotaoPreco 
            onClick={handleClickAddProduto}
            opcoes_lanche={opcoes_lanche}
        >Add to Order - $ {valorAtualizado}</Style.BotaoPreco>

      </Style.ContainerModal>
    </Style.BackgroundModal>
  )
}