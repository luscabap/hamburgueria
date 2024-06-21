import styled from "styled-components";

export const Container = styled.header`
  background-color: ${props => props.theme.colors.primary};
  max-width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
   
  nav {
    max-height: 100%;

    .itemMobile{
      display: none;
    }

    .container__lista {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      &__item {
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

  @media screen and (max-width: 425px){

      nav {
        .itemMobile{
          display: block;
          font-weight: 500;
          color: #fff;
        }

        .container__lista {
          display: none;
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
    max-width: 100%;
  }

  @media screen and (max-width: 425px){
    background-color: purple;

    img {
      height: 100%;
    }
  }
  
`