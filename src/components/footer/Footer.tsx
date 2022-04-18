import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import { InfoContainer, SocialContainer, Wrapper } from "./style";


export function Footer(){
    return(
        <Wrapper>
            <InfoContainer>
            </InfoContainer>
            <SocialContainer>
                <Facebook></Facebook>
                <Instagram></Instagram>
                <Twitter></Twitter>
            </SocialContainer>
        </Wrapper>
    )
}