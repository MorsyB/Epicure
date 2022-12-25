import styled from "styled-components";


export const Card = styled.div`
    width: 90%;
    min-width: 220px;
    max-width: 250px;
    height: 380px;
    display: inline-block;
    display: flex;
    background: #f9f4ea;
    flex-direction: column;
    justify-content: space-between;
`
export const CardImg = styled.img`
`

export const CardTitle = styled.h3`
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 2.67px;
    margin: 16px 0px 8px 16px;

    `
export const CardOwner = styled.h3`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
      width: 80%;
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */
  
  margin: 0px 0px 0px 16px;
`

export const DishTypeImg = styled.img`
position: relative;
    margin-top: 8px;
    margin-bottom: 8px;
    bottom: 16px;
    left: 16px;
`
export const PriceDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  left: 16px;
  bottom: 16px;

`

export const CoinImg = styled.img`
  margin-top: 7px;
  margin-right: 3px;
`

export const IngredientsDiv = styled.div`
  width: fit-content;
  letter-spacing: 0.97px;
  block-size: fit-content;

`