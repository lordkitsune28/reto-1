import styled from "styled-components";

export const Marco = styled.div`
width: 90%;
box-shadow: 0px 0px 30px hsl(180, 8%, 52%);
margin: 40px auto 5px auto;
border-radius: 10px;
background-color: white;
&:hover{
        background-color: hsl(180, 29%, 50%);
    }
`

export const Marcointerno = styled.div`
width: 100%;
background-color: white;
position: relative;
left: 10px;
border-radius: 0px 10px 10px 0px;
`

export const Imagen = styled.div`
float: left;
margin: 5px;
display: inline-block;
`

export const Datos = styled.div`
display: inline-block;
`

export const Etiquetas = styled.div`
display: inline-block;
width: 50%;
right: 0px;
position: absolute;
`

export const Notice = styled.div`
display: flex;
`

export const Categoria = styled.div`
display: inline-block;
margin: 40px 20px 0px 20px;
background-color: hsl(180, 52%, 96%);
color: hsl(180, 29%, 50%);
padding: 5px;
border-radius: 5px;
`

export const Title = styled.div`
color: hsl(180, 29%, 50%);
margin-right: 5px;
margin-top: 10px;
`

export const P = styled.div`
color: hsl(180, 8%, 52%);
margin-top: 0px;
`