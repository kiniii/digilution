import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

import Background from "./assets/background.svg"
import Logo from "./assets/logo.svg"
import Button from "../../components/buttons/Button";
import ButtonField from "../../components/buttons/ButtonField";
import TextField from "../../components/fields/TextField";
import Box from "../../Components/Layout/Box";


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
        <Box width="100%" height="100%" position="absolute" style={{overflowX:"hidden"}}>
                <LoginPlace>
                    <LogoImage src={Logo} alt="logo digilution" />
                    <Box as="h1" position="absolute" width={510} height={30} left={76} top={112} textAlign="center" >Welkom terug</Box>
                    <Input type="email" value={email} onChange={handleEmail} placeholder="email" />
                    <ButtonPos> 
                        <Button color="secondary" onClick={handleLogin}>Log in</Button>
                    </ButtonPos> 
                </LoginPlace>
            <BackgroundImage src={Background} alt="background digilution" /> 
        </Box>
    )
}

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
const ButtonPos = styled(ButtonField)` 
    position: absolute;
    left: 248px;
    top: 306px;
    `     
const Input = styled(TextField)` 
    position: absolute;
    width: 340px;
    height: 40px;
    padding-left: 10px;
    left: 155px;    
    top: 187px;
    `

export default Login;