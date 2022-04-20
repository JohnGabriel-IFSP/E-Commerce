import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 30vh;
    box-sizing: border-box;
    margin: 120px 0px 0px 0px;

    @media(min-width: 46em){
        margin: 80px 0px 0px 0px;
        height: 50vh;
    }
`;

export const SliderContainer = styled.div`
    width: 100%;
    height: 30vh;
    position: relative;
    margin: auto;
    overflow: hidden;

    @media(min-width: 46em){
        height: 50vh;
    }
`;

interface slideProps{
    display:string;
}

export const Slide = styled.div<slideProps>`
    width: 100%;
    height: 30vh;
    position: relative;
    display: ${(props) => props.display};

    @media(min-width: 46em){
        height: 50vh;
    }
`;

export const ImagemSlider = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
`;

export const TitleSlider = styled.h2`
    width: 100%;
    height: 100%;
    color: white;
    font-size: 2rem;
    position: absolute;
    text-align: center;
    top: 40%;
    z-index: 10;

    @media(min-width: 46em){
        font-size: 4rem;
    }
`;

export const DescriptionSlider = styled.h3`
    width: 100%;
    height: 100%;
    color: white;
    font-size: 2rem;
    position: absolute;
    text-align: center;
    top: 40%;
    z-index: 10;
    top: 65%;

    @media(min-width: 46em){
        font-size: 4rem;
    }
`;