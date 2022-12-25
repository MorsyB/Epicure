import styled from "styled-components";

interface ChefImg {
    chefPic: string;
}

export const ChefDivDesktop = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
margin: 4% 7%;
`
export const ChefTitleDesktop = styled.h2`
font-style: normal;
font-weight: 200;
font-size: 30px;
line-height: 35px;
/* identical to box height, or 117% */

text-align: center;
letter-spacing: 1.25px;
text-transform: uppercase;

`
export const ChefDescriptionDesktop = styled.p`
font-style: normal;
font-weight: 200;
font-size: 24px;
line-height: 35px;
margin-left: 5% ;
/* or 146% */
max-width:55% ;
text-align: justify;
letter-spacing: 1.25px;
`

export const AboutChefDiv = styled.div`
display: flex;
justify-content: space-between;
`
export const ChefRestaurantsDiv = styled.div`
display: flex;
flex-direction: column;
`
export const ChefRestarauntsTitle = styled.h3`
font-style: normal;
font-weight: 200;
font-size: 30px;
line-height: 35px;
/* identical to box height, or 117% */

letter-spacing: 1.25px;
text-transform: capitalize;
`
export const ChefRestaurants = styled.div`
width: 70%;

`
export const ImgDiv = styled.div<ChefImg>`
background: url(${props => props.chefPic}) no-repeat;
background-color: black;
width: 100%;
background-position: center;
background-size: 385px;
height: 300px;
`
export const ChefName = styled.h3`
padding: 10px;
background: #fff;
opacity: 0.6;
position: relative;
top: 200px;
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 47px;
/* identical to box height, or 118% */

text-align: center;
letter-spacing: 2.67px;
`