import styled from "styled-components";
import { searchIcon } from '../../Data/Icons'

export const SearchPopupDiv = styled.div`
display: flex;
justify-content: center;
position: absolute;
top:64px;
min-height: 586px;
width: 35vw;
z-index: 3;
right: 0;
background: #FFFFFF;
box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
`
export const SearchInput = styled.input`
margin-top: 20px;
text-align: center;
background: url(${searchIcon}) no-repeat scroll 10px;
height: 30px;
width: 80%;
border: 0.5px solid #000000;
border-radius: 4px;
`