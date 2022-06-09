import styled from "styled-components";

export const Conteiner = styled.div`
    margin-top: 3rem;
    padding: 50px;
    display: flex;
    
    @media screen and (max-width: 735px ) {
        margin-top: 5rem;
    }

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`;
export const ImgConteiner = styled.div`
    flex: 1;
    flex-wrap: wrap;
`;
export const PriorityImg = styled.div`
    display: flex;
    justify-content: center;
`;

export const SelectImg = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 5px;
`;

export const Image = styled.img`
    width: 70%;
    height: 65vh;
    object-fit: cover;

    @media screen and (max-width: 920px) {
        width: 80%;
    }

`;
export const ImageSecondary = styled.img`
    width: 20%;
    height: 100px;
    object-fit: cover;

    &:hover{
        border: 5px solid teal;
        border-radius: 8px;
    }

    @media screen and (max-width: 700px) {
        margin-bottom: 10px;
    }
`;
export const InfoConteiner = styled.div`
    flex: 1;
    padding:  0px 50px;

    @media screen and (max-width: 700px) {
        padding: 0px;
    }
`;
export const Title = styled.h1``;
export const Sobre = styled.p`
    margin: 20px 0px;

    @media screen and (max-width: 700px) {
        margin: 0px;
        margin-bottom: 15px;
    }
`;
export const Price = styled.span`
    font-size: 30px;
`;

export const FilterConteiner = styled.div`
    width: 100%;
    margin: 30px 0px;
    display: flex;
    justify-content: flex-end;
    gap: 20px;

    @media screen and (max-width: 700px) {
        justify-content: center;
        align-items: center;
    }

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

    &:hover{
        border: 2px solid teal;
        cursor: pointer;
    }
`;
export const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
export const FilterSizeOption = styled.option`
`;

export const AddConteiner = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 30px;

    @media screen and (max-width: 700px) {
        align-items: center;
        justify-content: center;
    }
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

