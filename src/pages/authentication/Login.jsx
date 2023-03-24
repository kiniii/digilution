import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

import Background from "./assets/background.svg"
import Logo from "./assets/logo.svg"


const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const handleLogin = () => {
        navigate("/login-password")
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    return (
        <Body>
            <LoginPage>  
                <LoginPlace>
                    <LogoImage src={Logo} alt="logo digilution" />
                    <Welcome>Welkom terug</Welcome>
                    <Input type="email" value={email} onChange={handleEmail} placeholder="email" />
                    <ButtonPos onClick={handleLogin}>Log in</ButtonPos> 
                </LoginPlace>
                <BackgroundImage src={Background} alt="background digilution" /> 
            </LoginPage>
        </Body>
    )
}

const Body = styled.body` 
    margin: 0;
    `
const LoginPage = styled.div` 
    height: 100%;
    `
const LoginPlace = styled.div` 
    position: fixed;
    width: 663px;
    height: 389px;
    top: 50%;
    left: 50%;    
    transform: translate(-50%, -50%);
    background: ${({theme: {colors} }) => colors.primary};
    `
const BackgroundImage = styled.img` 
    background: ${({theme: {colors} }) => colors.background};
    `
const LogoImage = styled.img` 
    position: absolute;
    left: 29.56%;
    right: 29.56%;
    top: 7.2%;
    bottom: 78.92%;
    width: 270px;
    height: auto;
    `   
const ButtonPos = styled.button` 
    position: absolute;
    left: 248px;
    top: 306px;
    box-sizing: border-box;
    width: 166px;
    height: 60px;
    `     
const Welcome = styled.h1` 
    position: absolute;
    width: 510px;
    height: 30px;
    left: 76px;
    top: 112px;
    text-align: center;
    `
const Input = styled.input` 
    position: absolute;
    width: 340px;
    height: 40px;
    padding-left: 10px;
    left: 155px;    
    top: 187px;
    `

export default Login;