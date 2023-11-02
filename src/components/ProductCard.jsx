import { Card,Box,Boxer } from "./ProductCard.styled"


// eslint-disable-next-line react/prop-types
const ProductCard = ({price,img,title,desc,category}) => {
  return (
    <Card>
        <img src={img} alt={title}/>
        <Boxer>
            <Box>
                <h1>{title}</h1>
                <h1>${price}</h1>
            </Box>
            <Box>
                <h2>{desc}</h2>
            </Box>
            <Box><h3>{category}</h3></Box>
        </Boxer>
    </Card>
  )
}

export default ProductCard