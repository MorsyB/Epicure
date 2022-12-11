import styled from "styled-components";
import heroImg from '../../Data/Pictures/hero-picture.png';
import search from "../../Data/Pictures/search.svg";

export const SuggestDiv = styled.div`
  position: absolute;
  background: #fafafa;
  width: 80%;
  max-height: 150px;
  margin-top: 120px;
  overflow: scroll;

`
export const SuggestTitle = styled.h2`
  text-align: left;
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  margin-left: 5%;
  letter-spacing: 1.29px;
`
export const SuggestLi = styled.li`
  list-style-type: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  text-align: left;
  letter-spacing: 1.29px;
  margin-left: 5%;
  height: 30px;
`
export const HeroDiv = styled.div`
  background-image: url(${heroImg});
  width: 100%;
  height: 273px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeroSearchDiv = styled.div`
  width: 90%;
  max-width: 350px;
  height: 50%;
  background: rgb(243, 240, 240);
  opacity: 0.9;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

`

export const HeroLabel = styled.label`
  font-style: normal;
  font-weight: 200;
  font-size: 24px;
  line-height: 32px;
  /* or 133% */

  letter-spacing: 1.97px;

  color: #000000;
`

export const HeroInput = styled.input`
  position: absolute;
  top: 200px;
  width: 80%;
  max-width: 310px;
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