import { PersonOutlineOutlined, Search, ShoppingCartOutlined } from "@material-ui/icons";

import { Center, Input, Left, Logo, MenuContainer, Navbar, Right, SearchContainer, Wrapper } from "./style";

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
                        <Search></Search>
                    </SearchContainer>
                </Center>
                <Right>
                    <MenuContainer>
                        <ShoppingCartOutlined></ShoppingCartOutlined>
                        <PersonOutlineOutlined></PersonOutlineOutlined>
                    </MenuContainer>
                </Right>
            </Wrapper>
        </Navbar>
    );
}