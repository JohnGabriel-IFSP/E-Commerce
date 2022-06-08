import styled from "styled-components";

export const Conteiner = styled.div`
    margin-top: 3rem;
    padding: 50px;
    display: flex;
`;
export const ImgConteiner = styled.div`
    flex: 1;
`;
export const Image = styled.img`
    width: 100%;
    height: 65vh;
    object-fit: cover;

`;
export const InfoConteiner = styled.div`
    flex: 1;
    padding:  0px 50px;
`;
export const Title = styled.h1``;
export const Sobre = styled.p`
    margin: 20px 0px;
`;
export const Price = styled.span`
    font-size: 30px;
`;

export const FilterConteiner = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;
export const Filter = styled.div`
    display: flex;
    align-items: center;
`;
export const FilterTitle = styled.span`
`;
export const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props =>props.color};
    margin: 0px 5px;
    cursor: pointer;
`;
export const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
export const FilterSizeOption = styled.option`
`;

export const AddConteiner = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const AmountConteiner = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
export const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
export const Button = styled.button`
    padding: 15px;
    border: 1px solid teal;
    background-color: ${({theme})=> theme.colors.white};
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: ${({theme})=> theme.colors.tertiary};
    }
`;

