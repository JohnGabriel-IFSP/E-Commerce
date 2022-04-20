import styled from "styled-components";

type socialProps = {
    display?:string;
}

export const SocialContainer = styled.div<socialProps>`
    width: 100%;
    display: ${(props) => props.display};
    color: black;
`;

export const Image = styled.img`
    max-width: 100%;
`;

export const CardContainer = styled.a`
    cursor: pointer;
    width: 100%;
    text-decoration: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin: 15px;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    transition: 0.3s;
    border-radius: 10px;

    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;

export function Social({display}:socialProps){
    return(
        <SocialContainer display={display}>
            <CardContainer href="/">
                <Image src="src\assets\icons\facebook-48.png"/>
                <span> Facebook</span>
            </CardContainer>
            <CardContainer href="/">
                <Image src="src\assets\icons\instagram-48.png"/>
                <span> Instagram</span>
            </CardContainer>
            <CardContainer href="/">
                <Image src="src\assets\icons\twitter-48.png"/>
                <span> Twitter</span>
            </CardContainer>
        </SocialContainer>
    )
}