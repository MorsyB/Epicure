import styled from "styled-components";

export const HeaderDesktopDiv = styled.nav`
    width: 80%;
    height: 64px;
    position: fixed;
    padding-left: 10vw;
    padding-right: 10vw;
    margin: 0px;
    display: flex;
    justify-content: space-between;
    z-index: 2;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
`


export const LeftSideDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`

export const RightSideDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 130px;
`

export const HeaderBTN = styled.button`
margin-left: 3vw;
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
/* identical to box height */

letter-spacing: 1.92px;
background: #FFF;
border: 0px;
:hover{
    cursor: pointer;
}

`

export const MarginDiv = styled.div`
height: 64px;
`

export const HeaderImg = styled.img`
:hover{
    cursor: pointer;
}
`