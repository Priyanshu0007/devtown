import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-content: center;
  align-items:center;
  gap: 1rem;
  p{
    font-size: 24px;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;