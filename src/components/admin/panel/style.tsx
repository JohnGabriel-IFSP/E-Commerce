import styled from "styled-components"


export const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    background: ${({theme}) => theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;

    @media(min-width: 46em){
        margin-top: 80px;
    }
`;

type displayProp ={
    display : string;
}
export const FormContainer = styled.div<displayProp>`
    width: 98%;
    min-height: 55vh;
    display: ${(props) => props.display};
    flex-direction: column;
    background-color: ${({theme})=> theme.colors.secundary};
    border-radius: 10px;
    margin: 1rem;
    
    @media(min-width: 46em){
        padding: 0.5rem;
    }
`;

export const Title = styled.h1`
    font-size: 35px;
    font-weight: 800;
    color: ${({theme})=> theme.colors.primary};
    justify-content: flex-start;

    @media screen and (max-width: 600px) {
        margin-bottom: 3%;
        font-size: 25px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 25px;
`;

export const Input = styled.input`
    flex: 1;
    border: none;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
    border-radius: 5px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: end;
`;

export const Button = styled.button`
    cursor: pointer;
    width: 30%;
    height: 35px;
    border: none;
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    margin-top: 10px;

    &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const OptionContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    gap: 15px;
    padding: 25px;
    background-color: ${({ theme }) => theme.colors.secundary};
    box-shadow: 5px 5px 15px ${({theme})=> theme.colors.primary};

    @media screen and (max-width: 650px) {
        margin: 0px;
        padding-left: 55px ;
    }
`;

export const LinkOption = styled.a`
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};

    &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;