import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 117px;
  display: flex;
  cursor: pointer;

  .containerInfos {
    min-height: 85px;
    width: 75%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
    .titulo{
      color: ${props => props.theme.colors.textColorPrimary};
      font-size: 16px;
      font-weight: 500;
    }

    .descricao{
      color: ${props => props.theme.colors.textColorSecondary};
      font-weight: 300;
      font-size: 16px;
    }

    .imagem {
      width: 25%;
      height: 100;
      border-radius: 8px;
    }
`