import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

import Box from "../../components/Layout/Box";
import Background from "./assets/background.svg"
import Logo from "./assets/logo.svg"
import Button from "../../components/buttons/Button";
import TextField from "../../components/fields/TextField";
import ButtonField from "../../components/buttons/ButtonField";

const Login = () => {
    const navigate = useNavigate();

    const [password, setPassword] = useState("");

    const handleLogin = () => {
        navigate("/dashboard")
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleHerstel = () => {
        alert("link herstel")
    }

    return (
        <Box m={0}>
            <Box width="100%" height="100%" overflow="hidden" position="absolute">  
                <LoginPlace>
                    <Box as="img" width={270} height={"auto"} mt={20} src={Logo} alt="logo digilution" />
                    <Box as="h1" width={510} height={30} overflow="hidden" position="absolute" top={112} left={76}>Welkom terug</Box>
                    <Input type="password" value={password} onChange={handlePassword} placeholder="password"/>
                    <Box as="a" width={510} alignItems="center" textAlign="center" position="absolute" top={250} left={70} href="" onClick={handleHerstel}>Wachtwoord vergeten?</Box>
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
    padding-left: 10px;
    left: 155px;    
    top: 187px;
    `
export default Login;