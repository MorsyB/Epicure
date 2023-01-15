import styled from "styled-components";
export const PopDiv = styled.div`
overflow-y: auto;
width: 100vw;
align-items: center;
display: flex;
justify-content: center;
flex-direction: column;
`
export const PopDivDesktop = styled.div`
overflow-y: auto;
align-items: center;
display: flex;
justify-content: center;
flex-direction: column;
padding-bottom: 20px;
`
export const SignInTitle = styled.h2`
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 26px;
/* identical to box height, or 144% */

text-align: center;
letter-spacing: 2.67px;
text-transform: uppercase;

color: #000000;

`
export const SignInLabel = styled.label`
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 18px;
/* identical to box height, or 112% */

text-align: center;
letter-spacing: 1.97px;

color: #000000;
`
export const SignUpBTN = styled.button`
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 20px;
/* identical to box height, or 111% */

text-align: center;
letter-spacing: 2.67px;
text-transform: uppercase;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 5px 15px;
gap: 10px;
width: 206px;
height: 48px;
margin-top: 40px;
margin-bottom: 40px;
border: 1px solid #000000;
background: #fff;
`
export const SignInInput = styled.input`
    border: 0;
    border-bottom: 0.5px solid #000000;
    width: 100%;
    height: 30px;
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height, or 129% */
    text-align: left;
    letter-spacing: 1.97px;
    color: #000000;
    
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: #000000;
    }
    `
export const SignInForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`
export const LogInBTN = styled.button`
height: 48px;
width: 206px;
background: #000000;
margin-top: 40px;

font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 20px;
/* identical to box height, or 111% */

text-align: center;
letter-spacing: 2.67px;
text-transform: uppercase;

color: #FFFFFF;
&:disabled{
    background: #979797;
}
`

export const ForgetPass = styled.a`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
/* identical to box height, or 129% */

text-align: center;
letter-spacing: 1.97px;
margin-top: 16px;

`

export const Hr = styled.hr`
border-bottom: 0.5px solid #979797;
width: 30vw;
height: 0;

`
export const HrDesktop = styled.hr`
border-bottom: 0.5px solid #979797;
width: 13vw;
height: 0;

`

export const HrDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 40px;
`

export const HrText = styled.p`

font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
/* identical to box height, or 129% */

text-align: center;
letter-spacing: 1.97px;

color: #979797;
margin-left: 5px;
margin-right: 5px;
margin-top: 0;
`

export const InputLabel = styled.p`
font-style: normal;
font-weight: 200;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */

text-align: left;
letter-spacing: 1.97px;

color: #000;
opacity: 0.4;
`


export const InputDiv = styled.div`
    margin-top: 40px;
    width: 85%;
    display: flex;
    flex-direction: column;

`