import styled from "styled-components";
import searchFigma from "../../Data/Pictures/searchFigma.png";

export const NavbarDiv = styled.nav`
    height: 46px;
    padding-left: 5vw;
    padding-right: 5vw;
    margin: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 2;
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
    background: #FAFAFA;
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
    font-family: 'Helvetica Neue';
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
  background: url(${searchFigma}) no-repeat scroll 10px;
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