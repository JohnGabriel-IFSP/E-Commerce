import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    background: ${({theme}) => theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

type displayProp ={
    display : string;
}
export const FormContainer = styled.div<displayProp>`
    width: 95%;
    display: ${(props) => props.display};
    flex-direction: column;
    background-color: ${({theme})=> theme.colors.white};
    border-radius: 10px;
    margin: 1rem;
    box-shadow: 5px 5px 15px ${({theme})=> theme.colors.primary};
    
    @media(min-width: 46em){
        padding: 0.5rem;
        width: 60%;
        margin-top: 6rem;
        margin-left: 12rem;
    }
`;

export const LogoContainer = styled.div`
    margin-right: 5px;

    @media(min-width: 46em){
        margin-bottom: 25px;
    }
`;

export const Logo = styled.h1`
    min-width: 150px;
    padding: 10px;
    font-family: 'Oswald', sans-serif;
    font-size: 20px;
    color: ${({theme})=> theme.colors.white};
    @media(min-width: 46em){
        font-size: 30px;
    }
`;

export const Title = styled.h1`
    justify-content: flex-start;
    font-size: 35px;
    font-weight: 800;
    color: ${({theme})=> theme.colors.primary};
    margin-bottom: 15px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 25px;
`;

export const Input = styled.input`
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.colors.secundary};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.white};

    &:focus{
        border-color: ${({ theme }) => theme.colors.primary};
    }

    &:focus + label,
    &:not(:placeholder-shown) + label{
        top: 0;
        left: 6px;
        background-color: ${({ theme }) => theme.colors.white};

        @media(min-width: 46em){
        left: 10px;
        }
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    margin-bottom: 20px;
`;

export const Button = styled.button`
    cursor: pointer;
    width: 25%;
    height: 35px;
    border: none;
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    margin-top: 10px;

    &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SideBar = styled.div`
    @media(min-width: 46em){
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 200px;
        height: 100%;
    }
`;

export const OptionContainer = styled.div`
    display: flex;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 5px 5px 15px ${({theme})=> theme.colors.primary};

    @media(min-width: 46em){
        flex-direction: column;
        align-items: flex-start;
        text-align:left;
    }
`;

export const LinkOption = styled.a`
    cursor: pointer;
    width: 100%;
    height: 50px;
    padding: 10px;
    font-size: 15px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
    text-shadow: 1px 1px 2px black;
  }

  @media(min-width: 46em){
      flex-direction: column;
      font-size: 20px;
    }
`;

export const ContainerOptions = styled.div`
    width: 100%;
    display: flex;

    @media(min-width: 46em){
      flex-direction: column;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
`;

export const Fields = styled.div`
    position: relative;
    margin: 5px;
`;

export const Label = styled.label`
    position: absolute;
    pointer-events: none;
    font-size: 13px;
    top: 22px;
    left: 7px;
    transition: top 250ms, left 250ms;

    @media(min-width: 46em){
      font-size: 15px;
    }
`;

export const ContainerImages = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
    padding: 10px;
    gap: 10px;
    width: 100%;
    border: 2px solid ${({ theme }) => theme.colors.secundary};
    border-radius: 5px;
`;

type propImage ={
    image: string;
}
export const BoxImage = styled.span<propImage>`
    cursor: pointer;
    user-select: none;
    width: 150px;
    min-height: 150px;
    display: flex;
    text-align: center;
    align-items: center;
    border: 2px dotted ${({ theme }) => theme.colors.secundary};
    border-radius: 5px;
    background-image: url(${(props) => props.image}); 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;

`;

export const InputImage = styled.input`
    display: none;
`;