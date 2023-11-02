import styled from "styled-components";

export const Card = styled.div`
  background-color: rgb(241 245 249);
  img{
    width: 100%;
  }
  &:hover{
    transform: scale(1.05);
  }
  transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
`;
export const Boxer=styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Box = styled.div`
    font-family:'Poppins', sans-serif;
  display: flex;
  justify-content: space-between;
  h1{
    font-size: larger;
  }
  h2{
    font-size: medium;
    color: rgb(107 114 128);
  }
  h3{
    font-size: small;
    background-color: rgb(148 163 184);
    padding:5px;
    border-radius: 0.5rem; 
  }
`;