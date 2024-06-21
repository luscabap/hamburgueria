import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../redux/items/actions";
import { RootState } from "../../redux/root-reducer";
import { Carrinho } from "../Carrinho";
import { ListaItems } from "../ListaItems";
import * as Style from "./styles";
import { CiSearch } from "react-icons/ci";


const Cardapio = () => {
  const dispatch = useDispatch();
  const { loading, items, error } = useSelector((state: RootState) => state.itemReducer)

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  { loading && <div>CARREGANDO...</div> }

  { error && <div>Erro</div> }
  
  return (
    <>
    <Style.ContainerSearch>
      <CiSearch size={32} color="#8A94A4" className="iconSearch"/>
      <input type="text" name="" id="" className="searchBar" placeholder="Search menu items" />
    </Style.ContainerSearch>
    <Style.Container>
      <ListaItems
         secao={items?.sections}
      />
      <Carrinho />
    </Style.Container>
    </>
  )
}

export default Cardapio;