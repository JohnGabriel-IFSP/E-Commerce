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
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px 10px 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    transition: 0.3s;
    border-radius: 0px 0px 10px 10px;
`;

export const TextContainer = styled.span`
    width: 60px;
    text-align: center;
`;

export const SocialMidia = styled.a`
    cursor: pointer;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`;

export function Social({display}:socialProps){
    return(
        <SocialContainer display={display}>
            <CardContainer>
                <SocialMidia href="/">
                    <Image src="src\assets\icons\social\facebook-48.png"/>
                    <TextContainer>Facebook</TextContainer>
                </SocialMidia>
                <SocialMidia href="/">
                    <Image src="src\assets\icons\social\instagram-48.png"/>
                    <TextContainer>Instagram</TextContainer>
                </SocialMidia>
                <SocialMidia href="/">
                    <Image src="src\assets\icons\social\twitter-48.png"/>
                    <TextContainer>Twitter</TextContainer>
                </SocialMidia>
            </CardContainer>
        </SocialContainer>
    )
}