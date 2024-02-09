import { useState } from "react"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import useSignUpWithEmailAndPassword from "../../hooks/useSignupWithEmailAndPassword";



const Signup = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [inputs, setInputs] = useState({
        email: "",
        fullname:"",
        username:"",
        password: "",
    })
    const {loading, error, signup} = useSignUpWithEmailAndPassword()

    return (
        <>
            <input
                type="text"
                placeholder="Email"
                onChange={(e)=> setInputs({...inputs, email:e.target.value})}
            />
            <input
                type="text"
                placeholder="Username"
                onChange={(e)=> setInputs({...inputs, username:e.target.value})}
            />
            <input
                type="text"
                placeholder="Full Name"
                onChange={(e)=> setInputs({...inputs, fullname:e.target.value})}
            />
            <div className="password-container">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e)=> setInputs({...inputs, password:e.target.value})}
                />
                <span className="show-password-icon" onClick={()=>setShowPassword(!showPassword)}>
                    {showPassword? <FaEyeSlash/>: <FaEye/>}
                </span>
            </div>
            {error && (
                <p className="sign-in-error">{error.message}</p>
            )}
            {loading &&(
                <p>Loading auth...</p>
            )}
            <button className="login-btn"
                onClick={(e)=>{
                    e.preventDefault()
                    signup(inputs)
                    }}>
                    Sign up
            </button>

        </>
    )
}

export default Signup
