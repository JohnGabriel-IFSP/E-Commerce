import { PersonOutlineOutlined, Search, ShoppingCartOutlined } from '@mui/icons-material';
import { AccountContainer, ButtonSearch, CartContainer, Center, Input, Left, LinkLogo, Logo, MenuContainer, Navbar, Right, SearchContainer, Wrapper } from "./style";
import { useForm } from 'react-hook-form';

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
                    <SearchContainer onSubmit={()=>{alert("Teste")}}>
                        <Input></Input>
                        <ButtonSearch>
                            <Search onClick={() => {window.location.href = "/produtos"}}></Search>
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