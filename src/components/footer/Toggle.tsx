import { ArrowDropDown } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { Information } from "./Information";
import { Payments } from "./Payments";
import { Social } from "./Social";
import { ShowContent } from "./style";

interface toggleProps{
    display?: string;
    option?:string;
}

export const ContentToggle = styled.div<toggleProps>`
    display: ${(props) => props.display};
    width: 100%;
    height: 100px;
    background-color: rgba(255,255,255, 0.85);
`;

export function Toggle({option}:toggleProps){
    const [checked, setChecked] = useState(false);
    return(
        <>
            <ShowContent onClick={()=>setChecked(!checked)}>
                <ArrowDropDown></ArrowDropDown>
            </ShowContent>
            <ContentToggle display = {checked === true ? "flex" : "none"}>
                <Payments display = {option != "payments" ? "none" : "flex"}/>
                <Social display = {option != "social" ? "none" : "flex"}/>
                <Information display = {option != "more" ? "none" : "flex"}/>
            </ContentToggle>
        </>
    );
}