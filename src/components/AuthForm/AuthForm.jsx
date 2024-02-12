import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Login from './Login'
import Signup from './Signup'
import GoogleAuth from './GoogleAuth'


const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate()


  return (
    <>
      <div className="main-form-container flex">
                <img className="logo-auth" src="/images/logo.png" alt="Logo Image" />
                <form className="auth-form flex">
                    {isLogin ? <Login/> : <Signup/>}

                </form>
                <div className="or-divider flex">
                    <div className="horizontal-bar"></div>
                    <span>OR</span>
                    <div className="horizontal-bar"></div>
                </div>
               <GoogleAuth prefix={isLogin ? "Log in" : "Sign up"}/>
            </div>
            <div className="sign-up-container">
                <span>
                    {isLogin ? "Don't have an account?":"Already have an account?" }
                </span>
                <button onClick={()=>setIsLogin(!isLogin)} className="sign-up-button">
                    {isLogin ? "Sign up":"Log in" }

                </button>
            </div>
    </>
  )
}

export default AuthForm
