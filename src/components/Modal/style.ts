import styled from "styled-components";

export const BackgroundModal = styled.div`
  background-color: rgba(0, 0, 0, 0.55);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerModal = styled.div`
  background-color: #F8F9FA;
  width: 480px;
  height: 720px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .botaoFecharModal{
    position: absolute;
    right: 12px;
    top: 12px;
    background-color: #F8F9FA;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    color: ${props => props.theme.colors.primary};
    z-index: 1000;
    cursor: pointer;
    border: none;
    text-align: center;
  }

  .imagemComida{
    width: 100%;
    height: 320px;
  }

  .containerInfos{
    padding: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .titulo{
      font-weight: 700;
      font-size: 24px;
      color: ${props => props.theme.colors.textColorPrimary}
    }

    .descricao{
      font-weight: 400;
      font-size: 16px;
      color: ${props => props.theme.colors.textColorSecondary}
    }
  }

  .botaoAdicionarCarrinho{
    width: 432px;
    height: 48px;
    border-radius: 40px;
    padding: 4px 24px;
    border: none;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textColorContrast};
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    margin: 0 0 12px 0;
  }
`;