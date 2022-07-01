import { Add, Remove } from "@mui/icons-material"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Conteiner, ImgConteiner, Image, InfoConteiner, Title, Sobre, Price, 
    FilterConteiner,Filter, FilterTitle, FilterColor, FilterSize, FilterSizeOption,
    AddConteiner, Amount, AmountConteiner, Button, PriorityImg, SelectImg, ImageSecondary   } from "./productStyle"
import { useDispatch, useSelector } from "react-redux";

//Actions
import { getProductDetails } from "../../redux/Shopping/actions/productActions";
import { addToCart } from "../../redux/Shopping/actions/cartActions";
import { AnyAction} from "redux";

export const ProductPage = ({match, history}:any) => {

  const [qty, setQty] = useState(1)
  const dispatch = useDispatch();

  const productDetails = useSelector((state:AnyAction) => state.getProductDetails);
  const {loading, error, product} = productDetails;
  const { id } = useParams();
  
  useEffect(() =>{
    if(product && (id) !== product._id){
        dispatch(getProductDetails(id))
    }
  }, [dispatch, product, match]);

  
  const [item, setItem] = useState([]);
  const [images, setImages] = useState([]);
  const [active, setActive] = useState('');

  useEffect(()=>{
    const fetchData = async () => {
        const Data = await fetch(`http://localhost:8080/Products/${id}`)
            .then(response => response.json())
            .then(data => data)
        setItem(Data)
        setImages(Data.imgs)
        setActive(Data.imgs[0].url)
    }
    fetchData()
  }, [])

  return (
    <Conteiner>
        <ImgConteiner>
            <PriorityImg>
                <Image src={active}/>
            </PriorityImg>
            <SelectImg>
                {images.map((image:any)=> (
                    <ImageSecondary key={image._id} onClick={()=>{setActive(image.url)}} src={image.url}/>
                ))}
            </SelectImg>
        </ImgConteiner>
        <InfoConteiner>
            <Title>{item.productName}</Title>
            <Sobre>{item.description}</Sobre>
            <Price>R${item.price}</Price>
            <FilterConteiner>
                <Filter>
                    <FilterTitle>Cor</FilterTitle>
                    <FilterColor color={item.color}></FilterColor>
                </Filter>
                <Filter>
                    <FilterTitle>Tamanho</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>{item.size}</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterConteiner>
            <AddConteiner>
                <AmountConteiner>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountConteiner>
                <Button onClick={()=> addToCart(item._id)}>Enviar para o Carrinho</Button>
            </AddConteiner>
        </InfoConteiner>
    </Conteiner>
  )
}
