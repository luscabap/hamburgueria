import { useContext } from "react";
import * as Style from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

interface IHeaderProps {
  onChangeTheme: () => void,
  imgBanner: string,
}

const Header = ({ onChangeTheme, imgBanner }: IHeaderProps) => {
  const { name, colors } = useContext(ThemeContext);

  return (
    <>
    <Style.Container>
      <nav>
        <ul className="container__lista">
          <li>MENU</li>
          <li>ENTRAR</li>
          <li>CONTATO</li>
        </ul>
      </nav>
      <Switch 
        onChange={onChangeTheme}
        checked={name === "light"}
        height={20}
        width={40}
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={20}
        onColor={colors.background}
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