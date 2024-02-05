import React, { useState } from 'react'
import { useNavigate } from 'react-router'


const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleAuth = () => {
        if(!inputs.email || !inputs.password){
            alert('You need to fill in all the fields!')
            return
        }
        navigate("/") //this takes the user to the homepage
    }

  return (
    <>
      <div className="main-form-container flex">
                <img className="logo-auth" src="/images/logo.png" alt="Logo Image" />
                <form className="auth-form flex">
                    <input
                        type="text"
                        placeholder="Email"
                        onChange={(e)=> setInputs({...inputs, email:e.target.value})}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e)=> setInputs({...inputs, password:e.target.value})}
                    />
                    {!isLogin && (
                        <input
                        type="password"
                        placeholder="Confirm password"
                        onChange={(e)=> setInputs({...inputs, confirmPassword:e.target.value})}
                        />
                    )}
                    <button onClick={handleAuth} className="login-btn">
                        {isLogin ? "Log in" : "Sign up"}
                    </button>
                </form>
                <div className="or-divider flex">
                    <div className="horizontal-bar"></div>
                    <span>OR</span>
                    <div className="horizontal-bar"></div>
                </div>
                <button className="google-login-btn flex">
                    <img className="google-icon" src="/images/google.png" alt="Google Icon" />
                    <span>Log in with Google</span>
                </button>
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
