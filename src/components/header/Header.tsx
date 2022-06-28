import { PersonOutlineOutlined, Search, ShoppingCartOutlined } from '@mui/icons-material';
import { AccountContainer, ButtonSearch, CartContainer, Center, Input, Left, LinkLogo, Logo, MenuContainer, Navbar, Right, SearchContainer, Wrapper } from "./style";

export function Header(){
    
    const SearchByName = (name:string) =>{
        console.log(name)
    }

    const handleProductName = () =>{
        let name = document.getElementById("input-name")?.value
        SearchByName(name.toLowerCase())
    }

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
                        <Input placeholder='Digite o nome do produto' id='input-name'></Input>
                        <ButtonSearch>
                            <Search onClick={handleProductName}></Search>
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