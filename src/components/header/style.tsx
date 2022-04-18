import styled from 'styled-components';

export const Navbar = styled.div`
    position: fixed;
    background-color: #121212;
    color: white;
    top: 0;
    left: 0;
    width: 100%;
    height: 120px;
    z-index: 20;

    @media(min-width: 46em){
        max-height: 80px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    gap: 20px;
`;

export const Left = styled.div` 
    flex: 1
`;

export const Logo = styled.h1`
    font-family: 'Oswald', sans-serif;
`;


export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 2;
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border: 0.5px solid lightgray;
    width: 100%;
    padding: 5px;
    gap: 10px;
`

export const Input = styled.input`
    border: none;
    width: 100%;
    height: 30px;
`;

export const ButtonSearch = styled.div`
    cursor: pointer;
    display: flex;
    width: 30px;
    color: rgba(255,255,255,0.72);

    &:hover{
        color: rgba(255,255,255);
    }
`;

export const Right = styled.div` 
    display: flex;
    justify-content: flex-end;
    flex: 1;
`;

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;    
    gap: 15px;
`;

export const CartContainer = styled.div`
    cursor: pointer;
    display: flex;
    width: 30px;
    color: rgba(255,255,255,0.72);
    
    &:hover{
        color: rgba(255,255,255);
    }
`;

export const AccountContainer = styled.div`
    cursor: pointer;
    display: flex;
    width: 30px;
    color: rgba(255,255,255,0.72);

    &:hover{
        color: rgba(255,255,255);
    }
`;