import { PaginationStyle } from "./Home.styled";

// eslint-disable-next-line react/prop-types
const Pagination = ({productPerPage,totalProduct,paginate}) => {
    const pageNumber=[];
    for(let i=1;i<=Math.ceil(totalProduct/productPerPage)&&i<=5;i++){pageNumber.push(i);}
  return (
    <PaginationStyle>
        {pageNumber.map(number=>(
            <li key={number} onClick={()=>paginate(number)}>
                <a>{number}</a>
            </li>
        ))}
    </PaginationStyle>
    
  )
}

export default Pagination