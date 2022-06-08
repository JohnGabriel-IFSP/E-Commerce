import { Button, ButtonContainer, Form, FormContainer, InfoContainer, Input, Title, Fields, Label, ContainerImages, BoxImage, InputImage } from "./style";
import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from "react";

export function CreateProduct({current}:any){
    const refImage1 = useRef(null);
    const refImage2 = useRef(null);
    const refImage3 = useRef(null);
    const refImage4 = useRef(null);

    const [url, setUrl] = useState(""); 

    const handleUpload = () =>{
        const preview = URL.createObjectURL(refImage1.current?.files[0])
        setUrl(preview)
    }
    
    // const handleInputAction = () =>{
    //     refImage1.current?.click();
    // }

    const { register, handleSubmit } = useForm();

    const postProduct = (data: RequestInit | undefined) => 
        fetch('http://localhost:8080/CadastrarProduto', 
                {method: "POST", 
                headers:{"Content-Type" : 'application/json'}, 
                body:JSON.stringify(data)})
            .then(() =>{
                console.log("Inserido com sucesso!");
            })
            .catch(() =>{
                console.log("Falha ao inserir!");
            });

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
                            <BoxImage image={url} onClick={()=>{refImage1.current?.click()}}> Click para adicionar uma imagem</BoxImage>
                            <InputImage accept="image/*" type="file" ref={refImage1} id="image" onChange={handleUpload}/>
                        </div>
                        <div>
                            <BoxImage image={url} onClick={()=>{refImage2.current?.click()}}> Click para adicionar uma imagem</BoxImage>
                            <InputImage accept="image/*" type="file" ref={refImage2} id="image" onChange={handleUpload}/>
                        </div>
                        <div>
                            <BoxImage image={url} onClick={()=>{refImage3.current?.click()}}> Click para adicionar uma imagem</BoxImage>
                            <InputImage accept="image/*" type="file" ref={refImage3} id="image" onChange={handleUpload}/>
                        </div>
                        <div>
                            <BoxImage image={url} onClick={()=>{refImage4.current?.click()}}> Click para adicionar uma imagem</BoxImage>
                            <InputImage accept="image/*" type="file" ref={refImage4} id="image" onChange={handleUpload}/>
                        </div>
                    </ContainerImages>
                    <ButtonContainer>
                        <Button type="submit">Enviar</Button>
                    </ButtonContainer>
                </Form>
            </FormContainer>
    );
}