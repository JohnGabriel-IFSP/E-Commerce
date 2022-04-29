import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 50em;
    display: flex;
    justify-content: center;
`;

export const CardsContainer = styled.div`
    width: 100%;
    height: 50%;
    background-color: ${({theme}) => theme.colors.white};
    display: flex;
    justify-content: center;
`;