import styled from "styled-components";
import search from "../../Data/Pictures/search.svg";


export const NavbarMargin = styled.div`
    height: 46px;
`
export const NavbarDiv = styled.nav`
    position: fixed;
    width: 90%;
    height: 46px;
    padding-left: 5vw;
    padding-right: 5vw;
    margin: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 2;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
    `
export const LeftsideDiv = styled.div`
    display: flex;
    width: 33%;
    align-items: center;

    `

export const CenterDiv = styled.div`
    display: flex;
    width: 33%;
    align-items: center;
    justify-content: center;

`

export const RightsideDiv = styled.div`
    display: flex;
    width: 34%;
    align-items: center;
    justify-content: space-between;

`
export const HamMenu = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top:45px;
    left: 0;
    background: #fff;
    width: 100vw;
    z-index: 1;
`
export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    `
export const DividingHr = styled.hr`
    margin: 0;
    margin-left: 5%;
    width: 90%;
    border: 0.5px solid #F2F2F2;
`

export const SearchPopup = styled.div`
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
        top:45px;
        left: 0;
        height: 350px;
        background: #FAFAFA;
        width: 100vw;
        z-index: 1;
        `

export const SearchTitle = styled.h2`
    width: 80vw;
    margin: 0;
    margin-left: 5vw;
    padding: 0;
    top: 0;
    height: 46px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    
    letter-spacing: 1.92px;
    
    color: #000000;
    `
export const NavInput = styled.input`
  top: 200px;
  width: 80%;
  height: 30px;
  background: url(${search}) no-repeat scroll 10px;
  text-align: center;
  border-radius: 4px;
  border: 0.5px solid #000000;
  &:focus{
      width: 85%;
      outline: none;
    };
    `

export const NavSuggestion = styled.div`
  width: 80%;
  max-height: 300px;
  overflow: scroll;
  `

export const ProfilePopup = styled.div`
    overflow-y: auto;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    top:45px;
    left: 0;
    height: 590px;
    width: 100vw;
    z-index: 1;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const BagDiv = styled.div`
    position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
        top:45px;
        left: 0;
        height: 150px;
        background: #FAFAFA;
        width: 100vw;
        z-index: 1;
        padding-top: 60px;
        
background: #FFFFFF;
box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
`

export const EmptyBag = styled.p`
margin-top: 22px;
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 20px;
/* or 125% */

text-align: center;
letter-spacing: 1.97px;
text-transform: uppercase;

color: #000000;

`