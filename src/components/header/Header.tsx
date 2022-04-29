//import { PersonOutlineOutlined, Search, ShoppingCartOutlined } from "@material-ui/icons";
import { PersonOutlineOutlined, Search, ShoppingCartOutlined } from '@mui/icons-material';

import { AccountContainer, ButtonSearch, CartContainer, Center, Input, Left, Logo, MenuContainer, Navbar, Right, SearchContainer, Wrapper } from "./style";

export function Header(){
    return (
        <Navbar>
            <Wrapper>
                <Left>
                    <Logo>Urban Store</Logo>
                </Left>
                <Center>
                    <SearchContainer>
                        <Input></Input>
                        <ButtonSearch>
                            <Search></Search>
                        </ButtonSearch>
                    </SearchContainer>
                </Center>
                <Right>
                    <MenuContainer>
                        <CartContainer onClick={()=>{window.location.href = "/carrinho"}}>
                            <ShoppingCartOutlined></ShoppingCartOutlined>
                        </CartContainer>
                        <AccountContainer onClick={()=>{window.location.href = "/login"}}>
                            <PersonOutlineOutlined></PersonOutlineOutlined>
                        </AccountContainer>
                    </MenuContainer>
                </Right>
            </Wrapper>
        </Navbar>
    );
}