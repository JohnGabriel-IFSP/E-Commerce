import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center; //talvez só desktop
    flex-wrap: wrap;
    padding: 15px;

    @media(min-width: 46em){
        width: 80%;
    }
`;

export const Card = styled.div`
    cursor: pointer;
    width: 400px;
    height: 200px;
    background-color: ${({theme}) => theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    transition: 0.3s;
    border-radius: 10px;
    padding: 0px 15px 0px 15px;

    @media(min-width: 46em){
       //width: 400px;
        height: 100%;
        margin: 0px 10px 0px 10px;
    }
`;

export const Image = styled.img`
    width: 80%;
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
    padding: 2px 16px;
    border-radius: 0px 0px 10px 10px;
    flex: 1;
`;

type productsProps = {
    productsContent: any;
}

export function Cards({productsContent}:productsProps){
    return(
        <CardContainer>
            {productsContent.map((card:any) => (
                <Card>
                    <Image src={card.images.main} alt="" />
                    <InfoCard>
                        <span>{card.title}</span>
                        <span>{card.price}</span>
                    </InfoCard>
                </Card>
            ))}
        </CardContainer> 
    );
}