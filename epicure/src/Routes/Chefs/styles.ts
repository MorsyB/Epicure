import { CardImgProps } from "react-bootstrap";
import styled from "styled-components";
interface ImgCard{
    chefPic:string;
}

export const ChefsDiv = styled.div`

`
export const ChefsCardDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`
export const ChefCard = styled.div<ImgCard>`
display: flex;
flex-direction: column;
justify-content: space-between;
background:url(${props => props.chefPic}) no-repeat center;
resize: both;
width: 90vw;
height: 90vw;
background-color: black;
background-position: contain;
margin-bottom: 5%;
background-size: cover;
`