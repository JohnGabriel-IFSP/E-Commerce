import styled from "styled-components"


export const Conteiner = styled.div`
    box-sizing: border-box;
    width: 100%;
    min-height: 720px;
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

export const Leftsideconteiner = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 50vh;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=> theme.colors.secundary};
    box-shadow: 0px 10px 10px ${({theme})=> theme.colors.primary};
    border-radius: 10px;

    @media screen and (max-width: 650px) {
        width: 80%;
        height: 60%;
        margin-top: 1rem;
        padding: 0.5rem;
    }
`;

export const Rightsideconteiner = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    height: 600px;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.secundary};
    box-shadow: 0px 10px 10px ${({theme}) => theme.colors.primary};
    border-radius: 10px;

    @media screen and (max-width: 650px) {
        width: 80%;
        height: auto;
        margin-top: 1rem;
        padding: 0.5rem;
        margin-bottom: 1rem;
    }
`;

export const Tittle = styled.h1`
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
    width: 80%;
`;

export const Input = styled.input`
    flex: 1;
    border: none;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
    border-radius: 5px;
`;

export const Link = styled.a`
    font-size: 15px;
    margin: 5px 0px;
    cursor: pointer;
    text-decoration: underline;
`;

export const Button = styled.button`
    width: 100%;
    height: 35px;
    border: none;
    background-color: lightgrey;
    cursor: pointer;
    border-radius: 5px;
`;

export const Termo = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

export const Cinput = styled.div`
    display: flex;
    padding: 0;
    margin-top: 1rem;
    width: 50%;
    justify-content: space-between;
    color: ${({theme})=> theme.colors.primary};
`;