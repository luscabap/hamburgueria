import styled from "styled-components";

export const Container = styled.header`
  background-color: ${props => props.theme.colors.primary};
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
   
  nav {
    height: 100%;
    .container__lista {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      li {
        list-style-type: none;
        width: 232px;
        text-align: center;
        align-items: center;
        font-size: 20px;
        color: ${props => props.theme.colors.textColorContrast};
        cursor: pointer;
      }
    }
  }
`;

export const ContainerImg = styled.div`
  width: 100%;
  height: 150px;
  text-align: center;
  background: linear-gradient(0.25turn, #36231C 100%, #36231C 0%, #36231C 100%);

  img {
    max-height: 100%;
  }
`