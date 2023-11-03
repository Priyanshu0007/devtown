import styled from "styled-components";

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1rem;
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media only screen and (min-width: 992px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

`;
export const PaginationStyle=styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    gap: 0.25rem;
    li{
        background-color: rgb(226 232 240);
        padding: 1rem;
        border-radius: 80%;
        list-style-type: none;
        &:hover{
            background-color: rgb(148 163 184);
        }
        a {
            text-align: center;
    color: #0060B6;
    text-decoration: none;
}

a:hover {
    color:#00A0C6; 
    text-decoration:none; 
    cursor:pointer;  
}
    }
`;
