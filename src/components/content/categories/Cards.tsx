import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;

    @media(min-width: 46em){
        width: 90%;
        flex-direction: row;
    }
`;

export const Card = styled.div`
    cursor: pointer;
    width: 100%;
    height: 250px;
    background-color: ${({theme}) => theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    transition: 0.3s;
    border-radius: 10px;
    margin: 5px 10px 5px 10px ;

    @media(min-width: 46em){
        height: 100%;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 80%;
    object-fit: cover;
    flex: 5;
`;

export const InfoCard = styled.div`
    background-color: ${({theme}) => theme.colors.secundary};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0px 0px 10px 10px;
    flex: 1;
`;

type categoriesProps = {
    categoriesContent: any;
}

export function Cards({categoriesContent}:categoriesProps){
    return(
        <CardContainer>
            {categoriesContent.map((card:any) => (
                <Card>
                    <Image src={card.images.main} alt="" />
                    <InfoCard>
                        <h3>{card.title}</h3>
                        <span>{card.description}</span>
                    </InfoCard>
                </Card>
            ))}
        </CardContainer> 
    );
}