import { Button, ButtonContainer, Form, FormContainer, InfoContainer, Input, Title, Fields, Label, ContainerImages, BoxImage, InputImage } from "./style";
import { useForm } from 'react-hook-form';
import { useRef, useState } from "react";

export function CreateProduct({current}:any){
    
    const formData = new FormData()
    
    const refImage1 = useRef(null);
    const refImage2 = useRef(null);
    const refImage3 = useRef(null);
    const refImage4 = useRef(null);

    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState(""); 
    const [image3, setImage3] = useState("");
    const [image4, setImage4] = useState("");
    
    const { register, handleSubmit } = useForm();

    const Post = (formData:any) =>{
        fetch('http://localhost:8080/CadastrarProduto', 
                {method: "POST",
                body:formData})
            .then(() =>{
                console.log("Inserido com sucesso!");
            })
            .catch(() =>{
                console.log("Falha ao inserir!");
            });
    }

    const postProduct = (data: any) =>{
        formData.append('imageOne', refImage1.current?.files[0]);
        formData.append('imageTwo', refImage2.current?.files[0]);
        formData.append('imageThree', refImage3.current?.files[0]);
        formData.append('imageFour', refImage4.current?.files[0]);
        formData.append('productName', data.productName)
        formData.append('category', data.category)
        formData.append('size', data.size)
        formData.append('inventory', data.inventory)
        formData.append('color', data.color)
        formData.append('price', data.price)
        formData.append('description', data.description)

        Post(formData)
    }

    return(
            <FormContainer display={current ? 'flex' : 'none'}>
                <Form onSubmit={handleSubmit(postProduct)}>
                    <Title>Cadastrar Produto</Title>
                    <Fields>
                        <Input placeholder=" " {...register("productName")}></Input>
                        <Label>Nome do Produto</Label>
                    </Fields>
                    <Fields>
                        <Input placeholder=" " {...register("category")}></Input>
                        <Label>Categoria</Label>
                    </Fields>
                    <InfoContainer>
                        <Fields>
                            <Input placeholder=" "{...register("size")}></Input>
                            <Label>Tamanho</Label>
                        </Fields>
                        <Fields>
                            <Input placeholder=" " {...register("inventory")}></Input>
                            <Label>Quantidade</Label>
                        </Fields>
                        <Fields>
                            <Input placeholder=" " {...register("color")}></Input>
                            <Label>Cor</Label>
                        </Fields>
                        <Fields>
                            <Input placeholder=" " {...register("price")}></Input>
                            <Label>Preço</Label>
                        </Fields>
                    </InfoContainer>
                    <Fields>
                        <Input placeholder=" " {...register("description")}></Input>
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