import styled from "styled-components";

export const BagPopupDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
top:64px;
min-height: 586px;
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