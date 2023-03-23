import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Background from "./assets/background.svg"
import Logo from "./assets/logo.svg"
import "./Login.css"

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
        <>
            <div className='login-page'>  
                <div className='login'>
                    <img src={Logo} className="logo" alt="logo digilution" />
                    <label className="titel-login">Welkom terug</label>
                    <input className="input" type="password" value={password} onChange={handlePassword} placeholder="password" />
                    <a className="herstel" href="" onClick={handleHerstel}>Wachtwoord vergeten?</a>
                    <div className='button-position'>
                        <button className='button' onClick={handleLogin}>Log in</button> 
                    </div>
                </div>
                <img src={Background} className="background" alt="background digilution" /> 
            </div>
        </>
    )
}

export default Login;