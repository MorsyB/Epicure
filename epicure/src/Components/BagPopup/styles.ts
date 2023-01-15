import styled from "styled-components";

export const BagPopupDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
top:64px;
min-height: 586px;
height: 80%;;
width: 35vw;
z-index: 3;
right: 0;
background: #FFFFFF;
box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
`
export const BagText = styled.p`
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 20px;
/* or 125% */
width: 120px;
text-align: center;
letter-spacing: 1.97px;
text-transform: uppercase;
`

export const BagBTN = styled.button`
position: absolute;
bottom: 44px;
border: 1px solid #000000;
width: 206px;
height: 48px;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 20px;
/* identical to box height, or 111% */
background: #fff;
text-align: center;
letter-spacing: 2.67px;
text-transform: uppercase;
`

export const BagDiv = styled.div`
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
width: 100%;

`
export const BagTitle = styled.h1`
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 35px;
/* identical to box height, or 109% */
margin-bottom: 0;
text-align: center;
letter-spacing: 1.25px;
text-transform: uppercase;
`
export const RestTitle = styled.h2`
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 20px;
/* or 111% */

text-align: center;
letter-spacing: 1.97px;
`
export const DishesDiv = styled.div`
overflow-y: auto;
height: 30%;
width: 70%;
::-webkit-scrollbar {
  display: none;
}
`
export const Comment = styled.p`
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 18px;
/* identical to box height, or 100% */
text-align: center;
letter-spacing: 1.97px;
`
export const CommentText = styled.input`
width: 70%;
height: 15%;
::placeholder{
font-style: normal;
font-weight: 200;
font-size: 12px;
line-height: 15px;
/* identical to box height */
letter-spacing: 1.29px;

}
`
export const WhiteBTN = styled.button`
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 20px;
text-align: center;
letter-spacing: 2.67px;
background: #fff;
text-transform: uppercase;
align-items: center;
width: 206px;
height: 48px;

`
export const DishBagCard = styled.div`
background: #F9F4EA;
height: 40%;
width: 100%;
margin-bottom: 3%;
display: flex;
`
export const DishBagDetails = styled.div`
width: 70%;
`

export const DishTitleDiv = styled.div`
`
export const DishTitle = styled.h2`
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 18px;
/* identical to box height, or 100% */
margin-bottom: 0;
text-align: left;
letter-spacing: 1.97px;
`
export const DishPrice = styled.h2`
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 13px;
/* identical to box height, or 100% */
margin-top: 5%;
text-align: left;
letter-spacing: 1.42278px;
color: #DE9200;
`
export const DishTitleQuantityDiv = styled.div`
display: flex;
`
export const DishQuantityDiv = styled.div`
font-style: normal;
font-weight: 400;
font-size: 18.1191px;
line-height: 18px;
/* identical to box height, or 100% */
display: flex;
justify-content: center;
align-items: center;
padding: 5%;
margin: 6%;
text-align: center;
letter-spacing: 1.98303px;
border: 0.571429px solid #979797;
border-radius: 3.42857px;
color: #DE9200;
`

export const DishIMG = styled.img`
width: 30%;
object-fit: cover;
`