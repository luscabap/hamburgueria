import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;

  .titulo{
    font-size: 24px;
    color: ${props => props.theme.colors.contrast};
    font-weight: 500;
  }

  .containerItens{
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
`