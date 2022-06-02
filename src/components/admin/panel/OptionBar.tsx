import { ContainerOptions, LinkOption, Logo, LogoContainer, OptionContainer } from "./style";

export function OptionBar({setCurrent}:any){
    return(
        <OptionContainer>
            <LogoContainer>
                <Logo>Urban Store</Logo>
            </LogoContainer>
            <ContainerOptions>
                <LinkOption onClick={() => {setCurrent(1)}}>Cadastrar Produto</LinkOption>
                <LinkOption onClick={() => {setCurrent(2)}}>Editar Produto</LinkOption>
                <LinkOption onClick={() => {setCurrent(3)}}>Buscar Pedido</LinkOption>
            </ContainerOptions>
        </OptionContainer>
    );
}
