import { ArrowDropDown } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { Information } from "./Information";
import { Payments } from "./Payments";
import { Social } from "./Social";
import { ContentToggle, Separator, ShowContent } from "./style";

interface toggleProps{
    option?:string;
}

export function Toggle({option}:toggleProps){
    const [checked, setChecked] = useState(false);
    return(
        <>
            <ShowContent onClick={()=>setChecked(!checked)}>
                <ArrowDropDown></ArrowDropDown>
            </ShowContent>
            <Separator/>
            <ContentToggle display = {checked === true ? "flex" : "none"}>
                <Payments display = {option != "payments" ? "none" : "flex"}/>
                <Social display = {option != "social" ? "none" : "flex"}/>
                <Information display = {option != "more" ? "none" : "flex"}/>
            </ContentToggle>
        </>
    );
}