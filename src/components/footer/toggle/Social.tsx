import styled from "styled-components";

type socialProps = {
    display?:string;
}

export const SocialContainer = styled.div<socialProps>`
    width: 100%;
    display: ${(props) => props.display};
    color: ${({theme}) => theme.colors.black};
`;

export const Image = styled.img`
    max-width: 100%;
`;

export const CardContainer = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
`;

export const TextContainer = styled.span`
    width: 60px;
    text-align: center;
`;

export const SocialMidia = styled.a`
    cursor: pointer;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin: 15px;
`;

export function Social({display}:socialProps){
    return(
        <SocialContainer display={display}>
            <CardContainer>
                <SocialMidia href="/1">
                    <Image src="src\assets\icons\social\facebook-48.png"/>
                    <TextContainer>Facebook</TextContainer>
                </SocialMidia>
                <SocialMidia href="/2">
                    <Image src="src\assets\icons\social\instagram-48.png"/>
                    <TextContainer>Instagram</TextContainer>
                </SocialMidia>
                <SocialMidia href="/3">
                    <Image src="src\assets\icons\social\twitter-48.png"/>
                    <TextContainer>Twitter</TextContainer>
                </SocialMidia>
            </CardContainer>
        </SocialContainer>
    )
}