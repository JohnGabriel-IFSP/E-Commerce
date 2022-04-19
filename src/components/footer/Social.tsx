import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import styled from "styled-components";

type socialProps = {
    display?:string;
}

export const SocialContainer = styled.div<socialProps>`
    width: 100%;
    display: ${(props) => props.display};
    color: black;
`;

export function Social({display}:socialProps){
    return(
        <SocialContainer display={display}>
            <Facebook></Facebook>
            <Instagram></Instagram>
            <Twitter></Twitter>
        </SocialContainer>
    )
}