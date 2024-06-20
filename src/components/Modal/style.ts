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
  justify-content: flex-start;

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
    max-height: 320px;
  }

  .containerInfos{
    padding: 10px;
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

  .containerEscolha{
    width: 100%;
    padding: 10px;

    .subtitulo{
      font-weight: 700;
      font-size: 16px;
      color: ${props => props.theme.colors.textColorSecondary}
    }

    .selecionarOpcao{
      font-size: 16px;
      font-weight: 400;
      color: #5f5f5f;
    }

    .containerOpcao{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 1rem;
      height: 72px;

      &__Infos{
        display: flex;
        flex-direction: column;
        cursor: pointer;

          &__labelMeat{
            font-size: 16px;
            color: ${props => props.theme.colors.textColorPrimary};
            font-weight: 500;
          }
    
          &__labelPrice{
            font-size: 16px;
            color: ${props => props.theme.colors.textColorSecondary};
            font-weight: 400;
          }
      }


      &__input{
        width: 24px;
        height: 24px;
        border: 10px solid #5f5f5f;
      }
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