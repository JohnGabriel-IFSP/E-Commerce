import { Add, Remove } from "@mui/icons-material"
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Conteiner, ImgConteiner, Image, InfoConteiner, Title, Sobre, Price, 
    FilterConteiner,Filter, FilterTitle, FilterColor, FilterSize, FilterSizeOption,
    AddConteiner, Amount, AmountConteiner, Button, PriorityImg, SelectImg, ImageSecondary   } from "./productStyle"
import { useDispatch, useSelector } from "react-redux";



//Actions
import { getProductDetails } from "../../redux/Shopping/actions/productActions";
import { addToCart } from "../../redux/Shopping/actions/cartActions";
import { LinearProgress } from "@mui/material";

export const ProductPage = () => {

  const [qty, setQty] = useState(1)
  const dispatch = useDispatch();

  const productDetails = useSelector((state:any) => state.getProductDetails);
  const {loading, error, product} = productDetails;
  const { id } = useParams();
  
  useEffect(() =>{
    if(product && (id) !== product._id){
        dispatch(getProductDetails(id))
    }
  }, [dispatch, product, id]);

  const [item, setItem] = useState([]);
  const [images, setImages] = useState([]);
  const [active, setActive] = useState('');

  const handleString = (string:string) =>{
    return string[0].toUpperCase()+string.substr(1)
  }

  const navigate = useNavigate();

  useEffect(()=>{
    const fetchData = async () => {
        const Data = await fetch(`https://api-rest-us.herokuapp.com/Products/${id}`)
            .then(response => response.json())
            .then(data => data)
        Data.productName = handleString(Data.productName)
        Data.description = handleString(Data.description)
        setItem(Data)
        setImages(Data.imgs)
        setActive(Data.imgs[0].url)
    }
    fetchData()
  }, [])

  const addToCartHandler = () =>{
    dispatch(addToCart(product._id, qty));
    navigate('/carrinho')
  }
  return (
    <Conteiner>
        {loading ? <LinearProgress /> : error ? <h2>{error}</h2> : (

            <>
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
            <Title>{product.productName}</Title>
            <Sobre>{product.description}</Sobre>
            <Price>R$ {product.price}</Price>
            <FilterConteiner>
                <Filter>
                    <FilterTitle>Cor</FilterTitle>
                    <FilterColor color={product.color}></FilterColor>
                </Filter>
                <Filter>
                    <FilterTitle>Tamanho</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>{product.size}</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterConteiner>
            <AddConteiner>
                <AmountConteiner>
                    <Remove cursor='pointer' onClick={()=>{setQty(qty > 1 ? qty-1 : qty)}}/>
                    <Amount>{qty}</Amount>
                    <Add cursor='pointer' onClick={()=>{setQty(qty < product.countInStock ? qty + 1 : qty)}}/>
                </AmountConteiner>
                <Button onClick={addToCartHandler}>Enviar para o Carrinho</Button>
            </AddConteiner>
        </InfoConteiner>
            
            </>

        )}
        
    </Conteiner>
  )
}
