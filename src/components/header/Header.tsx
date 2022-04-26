import { PersonOutlineOutlined, Search, ShoppingCartOutlined } from "@material-ui/icons";

import { AccountContainer, ButtonSearch, CartContainer, Center, Input, Left, LinkLogo, Logo, MenuContainer, Navbar, Right, SearchContainer, Wrapper } from "./style";

export function Header(){
    return (
        <Navbar>
            <Wrapper>
                <Left>
                    <LinkLogo onClick={()=>{window.location.href = "/"}}>
                        <Logo>Urban Store</Logo>
                    </LinkLogo>
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