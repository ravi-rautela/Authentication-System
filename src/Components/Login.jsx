import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Login = ({ setLoginuser }) => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const handlelogin = () => {
        axios.post("http://127.0.0.1:5000/login", user).then(res => {
            alert(res.data.message);
            setLoginuser(res.data.user);
            navigate("/");

        })
    }

    return (
        <>
            <div className="login">
                <form className="form">
                    <h1>Login Form</h1>
                    <div className="input-fields">
                        <input type="email" name='email' value={user.email} placeholder="Enter your E-mail" required onChange={onChange} />
                        <input type="password" name='password' value={user.password} placeholder="Enter your password" required onChange={onChange} />
                    </div>
                    <div className="btn" onClick={handlelogin}>Login</div>
                    <div>or</div>
                    <div className="btn" onClick={()=>{navigate("/signup")}}>Signup</div>
                </form>

            </div>
        </>
    )
}

export default Login