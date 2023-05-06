import { useState } from 'react'

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
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
                    <div className="btn">Login</div>
                    <div>or</div>
                    <div className="btn">Signup</div>
                </form>

            </div>
        </>
    )
}

export default Login