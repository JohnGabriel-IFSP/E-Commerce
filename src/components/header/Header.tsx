import { PersonOutlineOutlined, Search, ShoppingCartOutlined } from "@material-ui/icons";

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
                        <CartContainer>
                            <ShoppingCartOutlined></ShoppingCartOutlined>
                        </CartContainer>
                        <AccountContainer>
                            <PersonOutlineOutlined></PersonOutlineOutlined>
                        </AccountContainer>
                    </MenuContainer>
                </Right>
            </Wrapper>
        </Navbar>
    );
}