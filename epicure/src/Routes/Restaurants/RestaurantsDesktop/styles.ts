import styled from "styled-components";
interface ButtonProps {
    clickedBTN: boolean;
}

export const RestaurantsDesktopDiv = styled.div`
`
export const FiltersDesktopDiv = styled.div`
`
export const NormalFilterBTN = styled.button<ButtonProps>`
font-style: normal;
font-weight:${props => props.clickedBTN ? 600 : 200};
font-size: 18px;
line-height: 22px;
letter-spacing: 1.92px;
border: 0;
background: #fff;
margin-right: 1%;
margin-left: 1%;
:hover{
    cursor: pointer;
}

`
export const DropdownFilterBTN = styled.button<ButtonProps>`
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
/* identical to box height */
letter-spacing: 1.92px;
background:${props => props.clickedBTN ? "#D0CFCF" : "#FAFAFA"};
border: 0;
padding-top: 20px;
padding-bottom: 20px;
margin-right: 1%;
margin-left: 1%;

`

export const NormalFiltersDesktopDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 20px 0;
`
export const DropdownFiltersDesktopDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 30px 0;
background: #FAFAFA;
`
export const RestaurantsCardsDesktopDiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin-left: 9%;
margin-right: 7%;
margin-bottom: 7%;
`
export const FooterHr = styled.hr`
width: 100%;
border: 0.2px solid #979797;
opacity: 0.2;

`

export const PriceRangeDiv = styled.div`
position: absolute;
top: 200px;
left: 27%;
width: 300px;
height: 150px;
background: #fff;
box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
z-index: 1;
`
export const PriceRange = styled.input`
	-webkit-appearance: none;
    height: 3px;
    width: 90%;
	background-image: linear-gradient(#97979780, #97979780);
    border-radius: 2px;
    
    &::-webkit-slider-thumb{
        -webkit-appearance: none;
        height: 20px;
	    width: 20px;
	    border-radius: 50%;
	    background: black;
	    cursor: pointer;
	    box-shadow: 0 0 2px 0 #555;
    }
    
    `

export const DistanceDiv = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
top: 200px;
left: 42%;
width: 300px;
height: 130px;
background: #fff;
box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
z-index: 1;
`
export const RatingDiv = styled.div`
`
export const PopupTitle = styled.h3`
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
text-align: center;
letter-spacing: 1.92px;
margin: 0;
`

export const RangeDiv = styled.div`
background: #F9F4EA;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 90%;
height: 60px;

`
export const RangeTitleDiv = styled.div`
display: flex;
width: 100%;
justify-content: space-between;

`
export const RangeTitle = styled.h3`
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 20px;
/* or 143% */
margin: 0;
letter-spacing: 1.97px;
`