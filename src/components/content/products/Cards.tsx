import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media(min-width: 60em){
        display: grid;
        grid-template-columns: auto auto;
    }

    @media(min-width: 80em){
        display: grid;
        grid-template-columns: auto auto auto;
    }
`;

export const Card = styled.div`
    cursor: pointer;
    width: 400px;
    height: 300px;
    background-color: ${({theme}) => theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    transition: 0.3s;
    border-radius: 10px;
    margin: 20px ;

    @media(min-width: 46em){
        height: 350px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 75%;
    object-fit: cover;

    @media(min-width: 46em){
        height: 80%;
    }
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
`;

type productsProps = {
    productsContent: any;
}

export function Cards({productsContent}:productsProps){
    const ShowProduct = (id:string) =>{
        window.location.href = `/pageproduto/${id}`
    }
    return(
        <CardContainer>
            {productsContent.map((card:any) => (
                <Card key={card._id} onClick={() =>{ShowProduct(card._id)}}>
                    <Image key={card.imgs[0].key} src={card.imgs[0].url} alt="" />
                    <InfoCard>
                        <span>{card.productName}</span>
                        <span>R$ {card.price}</span>
                    </InfoCard>
                </Card>
            ))}
        </CardContainer> 
    );
}