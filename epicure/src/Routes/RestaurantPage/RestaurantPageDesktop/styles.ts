import styled from "styled-components";
interface ButtonProps {
    clickedBTN: boolean;
}
export const RestaurantPageDesktopDiv = styled.div`
margin-left: 10%;
margin-right: 10%;
`
export const DishesDiv = styled.div`
margin-top: 5%;
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-between;
`
export const CardDesktop = styled.div`
display: inline-block;
display: flex;
flex-direction: column;
justify-content: space-between;
background: #f9f4ea;
width: 24%;
text-align: center;
min-height: 520px;
margin-bottom: 3%;

`
export const FiltersDiv = styled.div`
text-align: center;
`
export const RestaurantDetailsDiv = styled.div`
text-align: center;
`
export const RestaurantName = styled.h2`
font-style: normal;
font-weight: 400;
font-size: 56px;
line-height: 64px;
/* identical to box height, or 114% */

letter-spacing: 3.67px;
margin-bottom: 0;
`
export const RestaurantChefName = styled.h2`
font-style: normal;
font-weight: 200;
font-size: 32px;
line-height: 36px;
margin-top: 0;
/* identical to box height, or 112% */

letter-spacing: 1.97px;
`
export const RestaurantOpen = styled.h2`
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 20px;
/* identical to box height, or 111% */

letter-spacing: 1.97px;
`
export const FilterButton = styled.button<ButtonProps>`
font-style: normal;
font-weight: 200;
font-size: 24px;
line-height: 29px;
/* identical to box height */
border: 0px;
    background: #fff;
letter-spacing: 1.92px;
border-bottom: ${props => props.clickedBTN ? "1.8px" : "0px"} solid rgba(222, 146, 0, 0.9);
margin-right: 3%;
`

export const WarningPopupBG = styled.div`
position: fixed;
background: #000;
opacity: 0.9;
width: 100vw;
height: 100vh;
top: 0;
left: 0;
z-index: 3;
`
export const WarningPopup = styled.div`
padding-top:40px;
padding-bottom:40px;
align-items: center;
display: flex;
flex-direction: column;
justify-content: space-around;
position: fixed;
width: 30%;
background: #fff;
top: 10vh;
left: 35vw;
z-index: 4;
`
export const PopupTitle = styled.h2`
font-style: normal;
font-weight: 200;
font-size: 24px;
line-height: 26px;
/* identical to box height, or 108% */

text-align: center;
letter-spacing: 2.67px;
text-transform: uppercase;
`
export const PopupText = styled.h2`
width: 85%;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 18px;
/* or 100% */

text-align: center;
letter-spacing: 1.97px;
`