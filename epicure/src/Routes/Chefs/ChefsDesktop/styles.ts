import styled from "styled-components";
interface ImgCard{
    chefPic:string;
}
export const ChefsDesktopDiv = styled.div`
`

export const ChefCardsDiv = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
margin-left: 7%;
margin-right: 7%;

`
export const ChefCard = styled.div<ImgCard>`    
display: flex;
flex-direction: column;
justify-content: space-between;
background:url(${props => props.chefPic}) no-repeat center;
resize: both;
width: 27vw;
height: 26vw;
background-color: black;
background-position: contain;
margin-bottom: 5%;
background-size: cover;
`
export const ChefName =styled.h3`
padding: 10px;
background: #fff;
opacity: 0.6;
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 47px;
/* identical to box height, or 118% */

text-align: center;
letter-spacing: 2.67px;
margin: 0;
`