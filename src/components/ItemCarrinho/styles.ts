import styled from "styled-components";

export const Container = styled.div`
  width: 320px;
  height: 71px;

  .containerInfos{
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nomeItem{
      font-weight: 400;
      font-size: 16px;
      color: ${props => props.theme.colors.textColorPrimary};
    }

    .precoItem{
      font-weight: 500;
      font-size: 16px;
      color: ${props => props.theme.colors.textColorPrimary};
    }
  }

  .containerQtd{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    width: 94px;
    gap: 4px;

    button{
      width: 20px;
      height: 20px;
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.textColorContrast};
      text-align: center;
      border-radius: 50%;
      border: none;
    }

    input{
      border: none;
      color: ${props => props.theme.colors.textColorPrimary};
      font-weight: 700;
      width: 30px;
      text-align: center;
    }
  }
`