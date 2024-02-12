import { useState } from "react"
import useLogin from "../../hooks/useLogin"


const Login = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })
    const {loading, error, login} = useLogin()

    return (
        <>
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
            {error && (
                <p className="sign-in-error">{error.message}</p>
            )}
            {loading &&(
                <p>Loading auth...</p>
            )}
            <button className="login-btn" onClick={(e)=>{
                e.preventDefault()
                login(inputs)
            }}>
                Log in
            </button>
        </>
    )
}

export default Login
