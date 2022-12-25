import styled from "styled-components";
import heroImg from '../../Data/Pictures/hero-picture.svg';
import search from "../../Data/Pictures/search.svg";

export const Hero = styled.div`
  background-image: url(${heroImg});
  width: 100%;
  background-size: cover;
  height: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;
  `
export const HeroInputDiv = styled.div`
  width: 55%;
  height: 40%;
  background: rgb(243, 240, 240);
  opacity: 0.9;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;

`
export const HeroLabelDesktop = styled.label`
width: 410px;
font-style: normal;
font-weight: 200;
font-size: 32px;
line-height: 40px;
/* or 125% */

letter-spacing: 1.97px;
color: #000000;
`

export const HeroInputDesktop = styled.input`
  margin-top: 25px;
  width: 70%;
  height: 48px;
  background: url(${search}) no-repeat scroll 10px;
  text-align: center;
  font-style: normal;
    font-weight: 200;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */
    color: #000000;
  border-radius: 4px;
  border: 0.5px solid #000000;
  &:focus{
      width: 85%;
      outline: none;
    };
  &::placeholder{
      font-style: normal;
        font-weight: 200;
        font-size: 24px;
        line-height: 27px;
        /* identical to box height */
        color: #000000;

  }
`