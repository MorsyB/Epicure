import styled from "styled-components";

export const BagMobileDiv = styled.div`
position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 20px;
        top:45px;
        left: 0;
        background: #FAFAFA;
        width: 100vw;
        z-index: 1;
        `
export const DishesDiv = styled.div`
width: 90%;
height: 20%;
overflow-y: auto;
`
export const TotalText = styled.p`
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 2.67px;
text-transform: uppercase;

color: #000000;

`