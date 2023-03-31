import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Background from "./assets/background.svg"
import Logo from "./assets/logo.svg"
import styled from "styled-components";
import Button from "../../Components/Button";
import ButtonField from "../../Components/ButtonField";
import TextField from "../../fields/TextField";

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
                    <LogoImage src={Logo} className="logo" alt="logo digilution" />
                    <TitleLogin>Welkom terug</TitleLogin>
                    <Input className="input" type="email" value={email} onChange={handleEmail} placeholder="email" />
                    <ButtonPos>
                        <Button className='button' onClick={handleLogin}>Log in</Button> 
                    </ButtonPos>
                </LoginPlace>
                <BackgroundImage src={Background} className="background" alt="background digilution" /> 
            </LoginPage>
        </Body>
    )
}

const Body = styled.body` 
    margin: 0;
    `
const LoginPage = styled.div` 
    height: 100%;
    overflow: hidden;
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
const ButtonPos = styled.div` 
    position: absolute;
    left: 248px;
    top: 306px;
    `     
const TitleLogin = styled.h1` 
    position: absolute;
    width: 510px;
    height: 30px;
    left: 76px;
    top: 112px;
    text-align: center;
    `
const Input = styled.div` 
    position: absolute;
    width: 340px;
    height: 40px;
    padding-left: 10px;
    left: 155px;    
    top: 187px;
    `

export default Login;