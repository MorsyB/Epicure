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


export const ProfilePopup = styled.div`
    overflow-y: auto;
    position: absolute;
    padding-top: 20px;
    top:64px;
    z-index: 1;
    background: #FFFFFF;
    width: 34%;
    right: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
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
`
export const SearchInput = styled.input`
position: relative;
left: 40px;
text-align: left;
background: no-repeat scroll 10px;
height: 30px;
padding-top: 3px;
padding-bottom: 3px;
padding-left: 9%;
width: 30vw;
border: 0.5px solid #000000;
border-radius: 4px;
&::placeholder{
      font-style: normal;
        font-weight: 200;
        font-size: 18px;
        line-height: 27px;
        /* identical to box height */
        color: #000000;
  }
  &:focus{
      outline: none;
    };
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
export const HeaderBTNClicked = styled.button`
margin-left: 3vw;
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
/* identical to box height */
border: 0px;
border-bottom: 2px solid #DE9200;
letter-spacing: 1.92px;
background: #FFF;
:hover{
    cursor: pointer;
}

`

export const MarginDiv = styled.div`
height: 64px;
`

export const HeaderImg = styled.img`
padding-left:10px ;
padding-right:10px ;
:hover{
    cursor: pointer;
}
`
export const SearchDivPopup = styled.div`
position: absolute;
width: 34%;
top:64px;
max-height: 70vh;
overflow-y: auto;
background: #fff;
`