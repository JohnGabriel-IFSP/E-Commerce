import { Center, Left, Navbar, Right, Wrapper } from "./style";

export function Header(){
    return (
        <Navbar>
            <Wrapper>
                <Left> Left </Left>
                <Center> Center </Center>
                <Right> Right </Right>
            </Wrapper>
        </Navbar>
    );
}