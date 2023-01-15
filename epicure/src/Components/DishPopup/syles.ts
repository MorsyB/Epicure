import styled from "styled-components";

export const PopupDiv = styled.div`
position: fixed;
width: 99vw;
height: 100vh;
background: #000;
opacity: 0.5;
top: 0;
left: 0;
z-index: 2;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`
export const ExitIcon = styled.img`
position: fixed;
top: 6.5vh;
left: 35vw;
`

export const DishDetailsDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 45%;
`

export const DishName = styled.h1`
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 26px;
/* identical to box height, or 81% */
margin-bottom: 0;
text-align: center;
letter-spacing: 2.67px;

color: #000000;

`
export const DishDetails = styled.p`
font-style: normal;
font-weight: 200;
font-size: 14px;
line-height: 18px;
/* or 129% */

text-align: center;
letter-spacing: 1.97px;

color: #000000;
`
export const DishPrice = styled.div`
margin-top: 10px;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 30px;
/* identical to box height, or 125% */
display: flex;
text-align: center;
letter-spacing: 1.03px;
margin-bottom: 20%;
`

export const DishDiv = styled.div`
overflow-y: auto;
position: fixed;
width: 30vw;
height: 80vh;
background: #fff;
top: 10vh;
left: 35vw;
z-index: 3;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
::-webkit-scrollbar {
  display: none;
}
`

export const LabelTitle = styled.label`
margin-bottom: 15px;
font-style: normal;
font-weight: 200;
font-size: 20px;
line-height: 18px;
/* identical to box height, or 90% */

text-align: center;
letter-spacing: 1.97px;

color: #000000;
padding-bottom: 4px;
border-bottom: 1.5px solid rgba(222, 146, 0, 0.9);
`
export const PriceHr = styled.hr`
border-bottom: 0.3px solid #979797;
background: #979797;
opacity: 0.5;
width: 4vw;
height: 0;
margin-left: 5px;
margin-right: 5px;
margin-top: 15px;

`
export const LabelText = styled.label`
font-weight: 200;
font-size: 18px;
line-height: 18px;
letter-spacing: 1.97px;
`
export const LabelBTN = styled.button`
border: 0;
background: #fff;
`

export const QuantitiyDiv = styled.div`
display: flex;
width: 50%;
justify-content: space-between;
flex-direction: row;
`

export const QuantitiyNumber = styled.p`
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 18px;
/* identical to box height, or 100% */

text-align: center;
letter-spacing: 1.97px;
color: #000000;
`

export const BlackBTN = styled.button`
width: 206px;
height: 48px;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 20px;
/* identical to box height, or 111% */

text-align: center;
letter-spacing: 2.67px;
text-transform: uppercase;

color: #FFFFFF;background: #000000;
border: 1px solid #000000;
margin-top: 20px;
margin-bottom: 20px;
`

