import { useState } from "react"


const Login = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

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
            <button className="login-btn">
                Log in
            </button>
        </>
    )
}

export default Login
