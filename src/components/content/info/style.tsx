import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 35em;
    background-color: ${({theme}) => theme.colors.secundary};
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 20em;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: ${({theme}) => theme.colors.white};
    font-size: 24px;
    font-weight: bold;
`;

export const Title = styled.h1`
    margin-bottom: 25px;
    text-shadow: 0px 2px 3px #666;
`;

export const Description = styled.div`
    text-align: right;
    width: 30%;
`;

export const Information = styled.div`
    text-align: left;
    width: 30%;
`;



