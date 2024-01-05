import AuthService from "@services/AuthService"
import { useEffect, useState } from "react"

import './authModal.scss'
import ErrorMessage from "@components/error/ErrorMessage"
import Loading from "@components/loading/Loading"

function AuthModal() {

    // useEffect(() => {
    //     document.body.style.overflow = 'hidden'
    //     return () => {
    //         document.body.style.overflow = 'auto'
    //     }
    // })

    const [isRegistration, setIsRegistration] = useState(false)

    const [loading, setLoading] = useState(false)

    const [error, setError] = useState(false)

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
            .then((res) => {
                setLoading(false)
                setError(false)
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
                setError(true)
                setLoading(false)
            })
            .finally(() => {
                setSignUpData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                })
                setIsRegistration(false)
                // for (const key in signUpData) {
                //     console.log('HERE WE GO');

                // }
            })

    }

    const onClickHandlerSignIn = (event) => {

        event.preventDefault()

        setLoading(true)
        setError(false)
        console.log(signInData);
        authService.signIn(signInData)
            .then((res) => {
                setLoading(false)
                setError(false)
                console.log(res);
                localStorage.setItem('token', res.data.token)
            })
            .catch((err) => {
                console.log(err);
                setError(true)
                setLoading(false)
            })
            .finally(() => {
                setSignInData({
                    email: '',
                    password: '',
                })
                // for (const key in signInData) {
                //     setSignInData({ ...signInData, [key]: '' })
                // }
            })

    }

    let classLabel = 'input-label'

    const contentInside = () => {
        return (
            !isRegistration ? (
                <form className="formAuth">

                    <div className="input-wrapper">
                        <input type="text" id="myInput" placeholder="" className="input-field" onFocus={() => classLabel = 'input-label active'} onBlur={()=>classLabel = 'input-label'} onChange={(event) => setSignInData({ ...signInData, email: event.target.value }) }/>
                        <label htmlFor="myInput" className={classLabel}>Введите данные</label>
                    </div>
                    <input type="password" placeholder="Enter Password" name="psw" onChange={(event) => setSignInData({ ...signInData, password: event.target.value })} required />

                    <button type="submit" onClick={onClickHandlerSignIn}>Sign In</button>

                    <button type="button" onClick={() => {
                        setIsRegistration(true)
                        setSignInData({
                            email: '',
                            password: '',
                        })
                    }}
                    >Create your account</button>


                </form>
            ) : (
                <form className="formReg">


                    <input type="text" name="name" placeholder="Enter Name" value={signUpData.first_name} onChange={(event) => setSignUpData({ ...signUpData, first_name: event.target.value })} required />

                    <input type="text" name='surname' placeholder="Enter Surname" value={signUpData.last_name} onChange={(event) => setSignUpData({ ...signUpData, last_name: event.target.value })} required />

                    <input type="text" name="email" placeholder="Enter Email" value={signUpData.email} onChange={(event) => setSignUpData({ ...signUpData, email: event.target.value })} required />


                    <input type="password" placeholder="Enter Password" name="psw" value={signUpData.password} onChange={(event) => setSignUpData({ ...signUpData, password: event.target.value })} required />

                    {/* <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required /> */}
                    <button type="submit" onClick={onClickHandlerSignUp}>Sign Up</button>

                    <button type="button" onClick={() => {
                        setIsRegistration(false)
                        setSignUpData({
                            first_name: '',
                            last_name: '',
                            email: '',
                            password: '',
                        })
                    }
                    }>Login</button>

                </form>
            )
        )
    }
    const errorMessage = error ? <ErrorMessage /> : null
    const loadingMessage = loading ? <Loading /> : null
    const content = !(loading || error) ? contentInside() : null

    return (
        <>
            {errorMessage}
            {loadingMessage}
            {content}
        </>

    );
}

export default AuthModal;