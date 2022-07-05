import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BoxImage, Button, ButtonContainer, ContainerImages, Fields, Form, FormContainer, InfoContainer, Input, InputImage, Label, SearchContainer, Title } from "./style";

export function UpdateProduct({current}:any){

    const [product, setProduct] = useState([]);

    const formData = new FormData()

    const { register, handleSubmit } = useForm();

    const refImage1 = useRef(null);
    const refImage2 = useRef(null);
    const refImage3 = useRef(null);
    const refImage4 = useRef(null);

    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState(""); 
    const [image3, setImage3] = useState("");
    const [image4, setImage4] = useState("");

    const getProductByID = async (id:any) =>{
        const Data = await fetch(`https://api-rest-us.herokuapp.com/Products/${id}`)
            .then(response => response.json())
            .then(data => data)
            .catch(() => console.log("Falha ao buscar registro!"));
        
        setProduct(Data);
        handleImages(Data)

    }

    const handleImages = (Data:any) =>{
        setImage1(Data.imgs[0].url)
        setImage2(Data.imgs[1].url)
        setImage3(Data.imgs[2].url)
        setImage4(Data.imgs[3].url)
    }
 
    const Update = async (formData: FormData, id:string) =>{
        await fetch(`https://api-rest-us.herokuapp.com/UpdateProduct/${id}`, 
                {method: "PUT",
                body:formData})
            .then(() =>{
                console.log("Alterado com sucesso!");
            })
            .catch(() =>{
                console.log("Falha ao alterar!");
            });
    }

    const updateProduct = (data: { productName: string; category: string; size: string; inventory: string; color: string; price: string; description: string; }) =>{
        formData.append('imageOne', (refImage1.current?.files[0] || product.imgs[0].key));
        formData.append('imageTwo', (refImage2.current?.files[0] || product.imgs[1].key));
        formData.append('imageThree', (refImage3.current?.files[0] || product.imgs[2].key));
        formData.append('imageFour', (refImage4.current?.files[0] || product.imgs[3].key));
        formData.append('productName', (data.productName || product.productName))
        formData.append('category', (data.category || product.category))
        formData.append('size', (data.size|| product.size))
        formData.append('inventory', (data.inventory || product.inventory))
        formData.append('color', (data.color || product.color))
        formData.append('price', (data.price || product.price))
        formData.append('description', (data.description || product.description))
        
        Update(formData, product._id)

    }

    return(
            <FormContainer display={current ? 'flex' : 'none'}>
                <SearchContainer>
                    <Title>Editar Produto</Title>
                    <Fields>
                        <Input placeholder = " " id="id"></Input>
                        <Label>Buscar por código do produto</Label>
                    </Fields>
                    <ButtonContainer>
                        <Button onClick={()=>(getProductByID(document.querySelector("#id")?.value))}>Buscar</Button>
                    </ButtonContainer>
                </SearchContainer>
                <Form onSubmit={handleSubmit(updateProduct)}>
                    <Fields>
                        <Input readOnly placeholder = " " defaultValue={product?._id ?? ""}></Input>
                        <Label>Código do Produto</Label>
                    </Fields>
                    <Fields>
                        <Input placeholder = " " defaultValue={product?.productName ?? ""} {...register("productName")}></Input>
                        <Label>Nome do Produto</Label>
                    </Fields>
                    <Fields>
                        <Input placeholder = " " defaultValue={product?.category ?? ""} {...register("category")}></Input>
                        <Label>Categoria</Label>
                    </Fields>
                    <InfoContainer>
                        <Fields>
                            <Input placeholder = " " defaultValue={product?.size ?? ""} {...register("size")}></Input>
                            <Label>Tamanho</Label>
                        </Fields>
                        <Fields>
                            <Input placeholder = " " defaultValue={product?.inventory ?? ""} {...register("inventory")}></Input>
                            <Label>Quantidade</Label>
                        </Fields>
                        <Fields>
                            <Input placeholder = " " defaultValue={product?.color ?? ""} {...register("color")}></Input>
                            <Label>Cor</Label>
                        </Fields>
                        <Fields>
                            <Input placeholder = " " defaultValue={product?.price ?? ""} {...register("price")}></Input>
                            <Label>Preço</Label>
                        </Fields>
                    </InfoContainer>
                    <Fields>
                        <Input placeholder = " " defaultValue={product?.description ?? ""} {...register("description")}></Input>
                        <Label>Descrição</Label>
                    </Fields>
                    <ContainerImages>
                        <div>
                            <BoxImage image={image1} onClick={()=>{refImage1.current?.click()}}> Click para adicionar uma imagem</BoxImage>
                            <InputImage accept="image/*" type="file" ref={refImage1} id="image" onChange={()=>setImage1(URL.createObjectURL(refImage1.current?.files[0]))}/>
                        </div>
                        <div>
                            <BoxImage image={image2} onClick={()=>{refImage2.current?.click()}}> Click para adicionar uma imagem</BoxImage>
                            <InputImage accept="image/*" type="file" ref={refImage2} id="image" onChange={()=>setImage2(URL.createObjectURL(refImage2.current?.files[0]))}/>
                        </div>
                        <div>
                            <BoxImage image={image3} onClick={()=>{refImage3.current?.click()}}> Click para adicionar uma imagem</BoxImage>
                            <InputImage accept="image/*" type="file" ref={refImage3} id="image" onChange={()=>setImage3(URL.createObjectURL(refImage3.current?.files[0]))}/>
                        </div>
                        <div>
                            <BoxImage image={image4} onClick={()=>{refImage4.current?.click()}}> Click para adicionar uma imagem</BoxImage>
                            <InputImage accept="image/*" type="file" ref={refImage4} id="image" onChange={()=>setImage4(URL.createObjectURL(refImage4.current?.files[0]))}/>
                        </div>
                    </ContainerImages>
                    <ButtonContainer>
                        <Button type="submit">Enviar</Button>
                    </ButtonContainer>
                </Form>
            </FormContainer>
    );
}