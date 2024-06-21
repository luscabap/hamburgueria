import styled from "styled-components";

export const ContainerSearch = styled.div`
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64rem;
  height: 2.75rem;
  border: 1px solid #8A94A4;
  border-radius: 8px;
  outline: none;

  .searchBar{
    width: 100%;
    height: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    border-radius: 8px;
    font-size: 16px;
  }

  .iconSearch{
    margin: 10px 12px;
    cursor: pointer;
  }

  @media screen and (max-width: 425px){
    max-width: 90%;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 32px 40px;
  gap: 24px;

  @media screen and (max-width: 425px){
    flex-wrap: wrap;
  }
`