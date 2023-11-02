import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0 0 30px;
  padding: 0;
`;

export const LinkStyled = styled.div`
  margin: 0 10px;
  padding: 3px 15px;
  position: relative;
  text-decoration: none;
`;
export const Logo = styled.div`
  margin: 0 10px;
  padding: 3px 15px;
  position: relative;
  text-decoration: none;
  font-size: 45px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media only screen and (max-width: 600px) {
        font-size: 26px;
    }
`;
export const Box=styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-size: 26px;
    padding-right: 1rem;
`;
export const Icon=styled.div`
    position: relative;
    cursor: pointer;
    &:hover {
        color: #0081f6;
    }
`;
export const Count=styled.div`
    position: absolute;
    top: -15px;
    right: -10px;
    background-color: #039cbb; 
    width: 25px;
    height: 25px;
    border-radius: 50%;
    color: white;
    font-size: 14px;
    display: grid;
    place-items: center;
`;