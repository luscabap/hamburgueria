import { useContext, useState } from "react";
import * as Style from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

interface IHeaderProps {
  onChangeTheme: () => void,
  imgBanner: string,
}

const Header = ({ onChangeTheme, imgBanner }: IHeaderProps) => {
  const context = useContext(ThemeContext);

  const [menuBurguer, setMenuBurguer] = useState("container__lista");

  return (
    <>
    <Style.Container>
      <nav>
        <h2 className="itemMobile">Menu</h2>
        <ul className="container__lista">
          <li className="container__lista__item">MENU</li>
          <li className="container__lista__item">ENTRAR</li>
          <li className="container__lista__item">CONTATO</li>
        </ul>
      </nav>
      <Switch 
        onChange={onChangeTheme}
        checked={context!.name === "light"}
        height={20}
        width={40}
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={20}
        onColor={context!.colors.background}
        className="switch-theme"
      />
      
    </Style.Container>
    <Style.ContainerImg>
        <img src={imgBanner} alt="Selo do restaurante" />
    </Style.ContainerImg>
    </>
  )
}

export default Header;