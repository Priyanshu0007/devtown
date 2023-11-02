
import { useState } from 'react'
import DropDown from './DropDown'
import { Container } from './Filter.styled';

const Filter = () => {
    const [sortFilter,setSortFilter]=useState("");
    const [category,setCategory]=useState("");
    console.log(sortFilter,category);
  return (
    <Container>
        <p>Checkout Products</p>
        <DropDown options={["New Arrive","High To Low","Low To High"]} defaultText={`Sort By`} changeOptionName={setSortFilter} />
        <DropDown options={["Furniture","Starinory","Toliotery"]} defaultText={`Categories`} changeOptionName={setCategory} />        
    </Container>

  )
}

export default Filter