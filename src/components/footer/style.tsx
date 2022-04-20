import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
    height: 15em;

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
    background-color: #121212;
    width: 100%;
    flex: 1;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    color: white;
`;