import styled from "styled-components";

interface ImgProps {
    src: string
}

export const Card = styled.div`
    width: 90%;
    display: flex;
    background: #f9f4ea;
    display: inline-block;
`
export const CardImg = styled.img<ImgProps>`
    src:url(${props => props.src}) ;
`
export const CardTitle = styled.h3`
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 2.67px;
    margin: 16px 0px 16px 16px;

`
export const CardOwner = styled.h3`
      width: 225px;
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */
  
  letter-spacing: 1.97px;
  margin: 0px 0px 0px 16px;
`