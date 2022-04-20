import styled from "styled-components";

interface toggleProps{
    display?: string;
}

export const Separator = styled.hr`
    width: 100%;
    border-top: 1px solid white;
    margin-left: 15px;
    margin-right: 15px;

    @media(min-width: 46em){
        display: none;
    }
`;

export const ContentToggle = styled.div<toggleProps>`
    display: ${(props) => props.display};
    width: 100%;
    height: 130px;
    background-color: #f0f8ff;
    margin-top: 10px;

    @media(min-width: 46em){
        display: flex;
    }
    
`;

export const ShowContent = styled.button`
    cursor: pointer;
    background-color: #121212;
    color: rgba(255,255,255,0.72);
    font-weight: bold;
    font-size: 26px;
    padding: 15px;
    border: none;

&:hover{
    color: rgba(255,255,255);
}

@media(min-width: 46em){
    display: none;
}

`;