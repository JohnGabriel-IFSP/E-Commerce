import styled from "styled-components"


export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    min-height: 500px;
    background: ${({theme}) => theme.colors.white};
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 3rem;

    @media screen and (max-width: 650px) {
        display: flex;
        flex-direction: column;
        margin-top: 8rem;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 50vh;
    align-items: center;
    background-color: ${({theme})=> theme.colors.secundary};
    box-shadow: 5px 5px 15px ${({theme})=> theme.colors.primary};
    border-radius: 10px;

    @media screen and (max-width: 650px) {
        width: 80%;
        height: 60%;
        margin-top: 1rem;
        padding: 0.5rem;
    }
`;

export const Logo = styled.h1`
    font-family: 'Oswald', sans-serif;
    font-size: 35px;
    margin: 30px 40px;
    color: ${({theme})=> theme.colors.white};
    text-shadow: 1px 1px 2px black;
`;

export const Title = styled.h1`
    font-size: 25px;
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
    width: 80%;
`;

export const Input = styled.input`
    flex: 1;
    border: none;
    min-width: 40%;
    margin-top: 5px;
    padding: 10px;
    border-radius: 5px;
`;

export const Button = styled.button`
    cursor: pointer;
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    background-color: ${({theme})=> theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;