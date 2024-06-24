import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../redux/items/actions";
import { RootState } from "../../redux/root-reducer";
import Carrinho from "../Carrinho";
import { ListaItems } from "../ListaItems";
import * as Style from "./styles";
import { CiSearch } from "react-icons/ci";
import { AppDispatch } from "../../redux/store";


const Cardapio = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, items, error } = useSelector((state: RootState) => state.itemReducer)

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  { error && <div>Erro</div> }
  
  return (
    <>
    <Style.ContainerSearch>
      <CiSearch size={32} color="#8A94A4" className="iconSearch"/>
      <input type="text" name="" id="" className="searchBar" placeholder="Search menu items" />
    </Style.ContainerSearch>
    <Style.Container>
      <div className="containerItems">
        <ListaItems
          secao={items?.sections}
        />
        { loading && <Style.ContainerLoader><div></div><div></div><div></div><div></div></Style.ContainerLoader>}
      </div>
      <Carrinho />
    </Style.Container>
    </>
  )
}

export default Cardapio;