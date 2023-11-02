
import DropDown from './DropDown'
import { Container } from './Filter.styled';

// eslint-disable-next-line react/prop-types
const Filter = ({setSortFilter,setCategory}) => {
    
  return (
    <Container>
        <p>Checkout Products</p>
        <DropDown options={["High To Low","Low To High","Ascending (A To Z)","Descending (Z To A)"]} defaultText={`Sort By`} changeOptionName={setSortFilter} />
        <DropDown options={["Clothes","Electronics","Fruits","Furniture","Shoes","Toys and Games","Sports and Outdoors"]} defaultText={`Categories`} changeOptionName={setCategory} />        
    </Container>

  )
}

export default Filter