import { PersonOutlineOutlined, Search, ShoppingCartOutlined } from '@mui/icons-material';
import { AccountContainer, ButtonSearch, CartContainer, Center, Input, Left, LinkLogo, Logo, MenuContainer, Navbar, Right, SearchContainer, Wrapper } from "./style";


import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

export const Header = ({ cart }:any) =>{

    const SearchByName = (name:string) =>{
        window.location.href = `/produtos/${name}`
    }

    const handleProductName = () =>{
        let name = document.getElementById("input-name")?.value || 'all'
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
