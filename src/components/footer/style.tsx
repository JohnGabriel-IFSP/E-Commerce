import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    @media(min-width: 56em){
        flex-direction: row;
    }
`;

export const Title = styled.span`
    font-size: 24px;
    font-weight: bold;
    margin-left: 15px;
`;

export const Container = styled.div`
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.white};
    width: 100%;
    flex: 1;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    @media(min-width: 46em){
        padding-top: 10px;
    }
    
    @media(min-width: 56em){
        justify-content: center;
    }
`;