import styled from "styled-components";

interface toggleProps{
    display?: string;
}

export const Separator = styled.hr`
    width: 100%;
    border-top: 1px solid ${({theme}) => theme.colors.tertiary};
    margin: 0px 15px 0px 15px;

    @media(min-width: 46em){
        display: none;
    }
`;

export const ContentToggle = styled.div<toggleProps>`
    display: ${(props) => props.display};
    width: 100%;
    height: 130px;
    background-color: ${({theme}) => theme.colors.tertiary};
    margin-top: 10px;

    @media(min-width: 46em){
        display: flex;
    }
`;

export const ShowContent = styled.button`
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.secundary};
    font-weight: bold;
    font-size: 26px;
    padding: 15px;
    border: none;

&:hover{
    color: ${({theme}) => theme.colors.white};
}

@media(min-width: 46em){
    display: none;
}
`;