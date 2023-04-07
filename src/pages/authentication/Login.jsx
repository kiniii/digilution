import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

import Background from "./assets/background.svg"
import Logo from "./assets/logo.svg"
import Button from "../../components/buttons/Button";
import ButtonField from "../../components/buttons/ButtonField";
import TextField from "../../components/fields/TextField";
import Box from "../../components/Layout/Box";

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
        <Box m={0}>
            <Box width="100%" height="100%" overflow="hidden" position="absolute">  
                <LoginPlace >
                    <Box as="img" width={270} height="auto" mt={20} src={Logo} alt="logo digilution" />
                    <Box as="h1" width={510} height={30} overflow="hidden" position="absolute" top={112} left={76} >Welkom terug</Box>
                    <Input type="email" value={email} onChange={handleEmail} placeholder="email" />
                    <ButtonPos> 
                        <Button color="secondary" onClick={handleLogin}>Log in</Button>
                    </ButtonPos> 
                </LoginPlace>
                <Box as="img" backgroundColor="background" src={Background} alt="background digilution" /> 
            </Box>
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