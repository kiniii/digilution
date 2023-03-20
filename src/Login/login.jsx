import Background from "./assets/background.svg"
import Logo from "./assets/logo.svg"
import Login_Password from "./login-password"
import './login.css'

export const Login_Email = () => {
    /*Login button goes to the password page */
    const login = () => {
        <Login_Password />
    }
    /*The email login page */
    return (
        <div className='login-page'>  
            <div className='login'>
                <img src={Logo} className="logo" alt="logo digilution" />
                <label className="titel-login">Welkom terug</label>
                <input className="input" type="email" placeholder='mail@mail.com' />
                <div className='button-position'>
                    <button className='button' onClick={login}>Log in</button> 
                </div>
            </div>
             <img src={Background} className="background" alt="background digilution" /> 
        </div>
    )
}

export default Login_Email