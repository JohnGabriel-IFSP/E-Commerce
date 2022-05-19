import styled from "styled-components";


export const ContentConteiner = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0 1.5rem 0 1.5rem;
    margin: 0;
    margin-top: 8rem;
    box-sizing: border-box;
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 824px) {
        flex-direction: column;
    }
`;

export const Bottom = styled.div`
    margin-bottom: 2rem;
`;

export const LeftSide = styled.div`
    flex: 3;
`;

export const RightSide = styled.div`
    flex: 1;
    border: 0.5px solid ${({theme}) => theme.colors.primary};
    border-radius: 10px;
    padding: 20px;
    height: 50vh;

    @media screen and (max-width: 824px) {
        margin-top: 2rem;
    }

`;

export const Title = styled.h1`
    padding: 0rem 0rem 1.8rem 1.5rem ;
`;

export const InputCEP = styled.input`
    padding: 0.5rem;
    width: 65%;
`;

export const Button = styled.button`
    width: 100%;
    width: ${(props)=>props.color === "ok" && "30%"};
    padding: 10px;
    background-color: ${({theme}) => theme.colors.secundary};
    color: ${({theme})=> theme.colors.white};
    font-weight: 600px;
    border: none;
    cursor: pointer;

`;

export const DivFrete = styled.div`
    display: flex;
    border: 0.5px solid ${({theme})=> theme.colors.primary};
    padding: 1rem;
    border-radius: 10px;
`;

export const Div = styled.div`
    flex: 1;
    display: ${(props) => props.color === "div1" && "flex"};
    justify-content: ${(props) => props.color === "div1" && "space-between"};
`;

export const Text = styled.h1`
    font-size: 20px;
    margin-bottom: 1rem;
`;

export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    @media screen and (max-width: 594px) {
        flex-direction: column;
    }
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

    @media screen and (max-width: 594px) {
        margin-top: 1.5rem;
    }
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

export const SummaryTitle = styled.h1`

`;

export const SummaryItemText = styled.span`
    
`;

export const SummaryItemPrice = styled.span`

`;

export const SummaryItem = styled.div`
    margin: 2.2rem 0rem;
    display: flex;
    justify-content: space-between;
    font-size: ${(props) => props.color === "total" && "24px"};
    font-weight: ${(props) => props.color === "total" && "500"};

    @media screen and (max-width: 824px) {
        margin: .5rem 0rem;
    }
`;

export const Last = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
    padding: 0;
`;

export const ShippingOption = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 .7rem 2rem;
`;

export const ShippingName = styled.label`
    margin-left: .5rem;
`;

export const ShippingPrice = styled.span`

`;

export const InputRadio = styled.input`

`;

export const Form = styled.form`

`;

