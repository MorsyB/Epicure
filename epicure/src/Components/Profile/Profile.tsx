import { useState } from 'react';
import { FormLabel } from 'react-bootstrap';
import profileIcon from '../../Data/Pictures/profileFigma.png';
import { ForgetPass, Hr, HrDiv, HrText, InputDiv, InputLabel, LogInBTN, SignInForm, SignInInput, SignInLabel, SignInTitle, SignUpBTN } from './styles';

function Profile() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (<>
        <SignInTitle>Sign in</SignInTitle>
        <SignInLabel>To continue the order, please sign in</SignInLabel>
        <SignInForm>
            <InputDiv>
            {email && <InputLabel>Email Address</InputLabel>}
            <SignInInput placeholder='Email' onChange={(e) => setEmail(e.target.value)} type="text" name="email" />
            </InputDiv>
            <InputDiv>
            {password && <InputLabel>Password</InputLabel>}
            <SignInInput placeholder='Password' onChange={(e) => setPassword(e.target.value)} type="password" name="password" />
            </InputDiv>
            <LogInBTN disabled={email == "" || password == "" ? true:false} value="Login" type="submit" />
            <ForgetPass>Forget password?</ForgetPass>
        </SignInForm>
            <HrDiv>
                <Hr />
                    <HrText>or</HrText>
                <Hr />
            </HrDiv>
            <SignUpBTN onClick={() => alert("Sign Up")}>Sign UP</SignUpBTN>
    </>)
}

export default Profile;