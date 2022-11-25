import styled from "styled-components";

interface ButtonProps {
    clickedBTN: boolean;
}

export const FiltersDiv = styled.div`
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
`
export const FilterButton = styled.button<ButtonProps>`
    border: 0px;
    background: #fff;
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: ${props => props.clickedBTN ? "600" : "400"};
    font-size: 17px;
    line-height: 21px;
    letter-spacing: 1.92px;
    border-bottom: ${props => props.clickedBTN ? "1.8px" : "0px"} solid rgba(222, 146, 0, 0.9);
`

export const CardDiv = styled.div`
    margin-bottom: 20px;
`

export const RestaurantsTitle = styled.h1`
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 22px;
  /* identical to box height */

    letter-spacing: 1.92px;
    text-transform: uppercase;

`

export const RestaurantsDiv = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`
