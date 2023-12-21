import { useState } from "react"
//import AuthService from "@services/AuthService"
import "./FormAuth.scss"
import AuthService from "../../services/AuthService"



const FormAuth = () => {

    const [signUpData, setSignUpData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    })

    const [signInData, setSignInData] = useState({
        email: '',
        password: '',
    })

    
    const authService = new AuthService()

    const onClickHandlerSignUp = (event) => {

        event.preventDefault()
        console.log(signUpData);
        authService.signUp(signUpData)
    
    }

    const onClickHandlerSignIn = (event) => {

        event.preventDefault()
        console.log(signInData);
        authService.signIn(signInData).then((res) => {
            console.log(res);
            localStorage.setItem('token', res.data.token)
        })
    
    }

    return (
        <div className="regAndAuth_sec">
            <div className="registration_sec" style={{ marginTop: 50 }}>

                <h2>Регистрация</h2>
                <form className="formAuth">

                    <label htmlFor="name">Enter your name</label>
                    <input type="text" name="name" value={signUpData.first_name} onChange={(event) => setSignUpData({ ...signUpData, first_name: event.target.value })} required />
                    <label htmlFor="surname">Enter your surname</label>
                    <input type="text" name='surname' value={signUpData.last_name} onChange={(event) => setSignUpData({ ...signUpData, last_name: event.target.value })} required />
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" name="email" placeholder="Enter Email"  value={signUpData.email} onChange={(event) => setSignUpData({ ...signUpData, email: event.target.value })} required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" value={signUpData.password} onChange={(event) => setSignUpData({ ...signUpData, password: event.target.value })} required />

                    {/* <label for="psw-repeat"><b>Repeat Password</b></label>
<input type="password" placeholder="Repeat Password" name="psw-repeat" required /> */}
                    <button type="submit" onClick={onClickHandlerSignUp}>Sign Up</button>

                </form>
            </div>

            <div className="login_sec" style={{ marginTop: 50 }}>
                <h2>Авторизация</h2>
                <form className="formAuth">

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" onChange={(event) => setSignInData({ ...signInData, email: event.target.value })} required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" onChange={(event) => setSignInData({ ...signInData, password: event.target.value })} required />

                    <button type="submit" onClick={onClickHandlerSignIn}>Sign In</button>


                </form>
            </div>
        </div>
    )
}

export default FormAuth