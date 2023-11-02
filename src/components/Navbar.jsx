
import {BsFillCartFill} from "react-icons/bs"
import { LinkStyled, NavList, Logo, Box, Icon, Count } from './Navbar.styled'
import {AiFillHeart,AiOutlineShoppingCart} from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
        <NavList>
            <LinkStyled>
                <Logo><BsFillCartFill/> SuperStore</Logo>
            </LinkStyled>
            <Box>
                <Icon>
                    <AiFillHeart/>
                    <Count>0</Count>
                </Icon>
                <Icon>
                    <AiOutlineShoppingCart/>
                    <Count>0</Count>
                </Icon>
            </Box>
        </NavList>
    </div>
  )
}

export default Navbar