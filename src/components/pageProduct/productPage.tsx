import { Conteiner, ImgConteiner, Image, InfoConteiner, Title, Sobre, Price, 
    FilterConteiner,Filter, FilterTitle, FilterColor, FilterSize, FilterSizeOption,
} from "./productStyle"

export const ProductPageConteiner = () => {
  return (
    <Conteiner>
        <ImgConteiner>
            <Image src="https://i.shafacdn.net/images/230897-65-auto-auto-cGO1rqBvW0s.jpg"></Image>
        </ImgConteiner>
        <InfoConteiner>
            <Title>Item</Title>
            <Sobre> 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore facere voluptatibus asperiores fugiat commodi at similique
                temporibus, neque cupiditate dolorum aut beatae magni blanditiis.
                Doloribus natus vel nostrum voluptatibus eum.
            </Sobre>
            <Price>R$ 30</Price>
            <FilterConteiner>
                <Filter>
                    <FilterTitle>Cor</FilterTitle>
                    <FilterColor color="black"></FilterColor>
                    <FilterColor color="darkblue"></FilterColor>
                    <FilterColor color="gray"></FilterColor>
                </Filter>
                <Filter>
                    <FilterTitle>Tamanho</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>P</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>G</FilterSizeOption>
                        <FilterSizeOption>GG</FilterSizeOption>
                        <FilterSizeOption>XGG</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterConteiner>
        </InfoConteiner>
    </Conteiner>
  )
}
