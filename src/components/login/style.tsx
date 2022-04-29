import styled from "styled-components"


export const Conteiner = styled.div`
    box-sizing: border-box;
    width: 100%;
    min-height: 720px;
    background: #34083f;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Leftsideconteiner = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    height: 90%;
    justify-content: center;
    align-items: center;
    background-color: #881297;
    box-shadow: 0px 10px 10px #000;
    border-radius: 10px;

    @media screen and (max-width: 600px) {
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
    height: 90%;
    justify-content: center;
    align-items: center;
    background-color: #881297;
    box-shadow: 0px 10px 10px #000;
    border-radius: 10px;

    @media screen and (max-width: 600px) {
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
    color: white;
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
`;