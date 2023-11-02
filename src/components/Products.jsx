/* eslint-disable react/prop-types */

import ProductCard from './ProductCard'
import { Cards } from './Home.styled'

// eslint-disable-next-line react/prop-types
const Products = ({data,loading,error}) => {
  return (
    <Cards>
        {!loading && !error && data.map((product)=><ProductCard key={product.id} id={product.id} img={product.images[0]} price={product.price} title={product.title} desc={product.description} category={product.category.name}/>)}
    </Cards>
  )
}

export default Products