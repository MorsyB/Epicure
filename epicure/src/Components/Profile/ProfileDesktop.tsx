import { useState } from 'react';
import { FormLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ForgetPass, Hr, HrDesktop, HrDiv, HrText, InputDiv, InputLabel, LogInBTN, PopDiv, PopDivDesktop, SignInForm, SignInInput, SignInLabel, SignInTitle, SignUpBTN } from './styles';

function ProfileDesktop() {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const isLogedIn = () => {
        if (sessionStorage.getItem('user') != null && sessionStorage.getItem('user') != undefined)
            return true
        return false
    }
    const getName = () => {
        return JSON.parse(sessionStorage.getItem("user") || "\{\"name\":\"xx\"\}")["name"]
    }
    const handleSubmit = () => {
        fetch("/api/users/getUser/" + email + "/" + password)
            .then(async (response) => {
                const data = await response.json()
                if (response.status == 200) {
                    toast.success("Login Successfully");
                    sessionStorage.setItem("user", JSON.stringify(data[0]));
                    navigate("/");
                } else {
                    if (data.length == 0)
                        toast.error("Wrong Email or Password")
                    else if (data[0] == 'Email')
                        toast.error("Not Valid Email")
                    else
                        toast.error("Not Valid Password")
                }
            });
    }

    return (<PopDivDesktop>

        <ToastContainer />
        {isLogedIn() ? <>
            <SignInTitle> {"Hello " + getName()}</SignInTitle>
            <LogInBTN onClick={() => { sessionStorage.removeItem("user"); navigate("/"); toast.success("Log out Successfully") }}>Log out</LogInBTN>
        </>
            : <>
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
                    <ForgetPass>Forget password?</ForgetPass>
                </SignInForm>
                <LogInBTN onClick={() => handleSubmit()} disabled={email == "" || password == "" ? true : false}>Login</LogInBTN>
                <HrDiv>
                    <HrDesktop />
                    <HrText>or</HrText>
                    <HrDesktop />
                </HrDiv>
                <SignUpBTN onClick={() => alert("Sign Up")}>Sign UP</SignUpBTN>
            </>
        }
    </PopDivDesktop>)
}

export default ProfileDesktop;