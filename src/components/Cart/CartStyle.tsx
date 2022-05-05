import styled from "styled-components";


export const ContentConteiner = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    margin-top: 8rem;
    box-sizing: border-box;
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Bottom = styled.div`

`;

export const LeftSide = styled.div`
    flex: 3;
`;

export const RightSide = styled.div`
    flex: 1;
`;

export const Title = styled.h1`

`;

export const InputCEP = styled.input`

`;

export const Button = styled.button`

`;

export const DivFrete = styled.div`

`;

export const Div = styled.div`

`;

export const Text = styled.span`

`;

export const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

export const Image = styled.img`
    width: 200px;
`;

export const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const ProductName = styled.span`

`;

export const ProductId = styled.span`

`;

export const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;

export const ProductSize = styled.span`

`;

export const ProductPrice = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ProductAmountConteiner = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

export const ProductAmount = styled.div`
    font-size: 16px;
    margin: 5px;
`;

export const ProductPriceDetail = styled.div`
    font-size: 20px;

`;

export const Hr = styled.hr`
    margin: 2rem;
    background-color: ${({theme}) => theme.colors.secundary};
    border: none;
    height: 2px;
`;

