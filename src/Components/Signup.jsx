import { useState } from "react"

const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    })
    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    return (
        <>
            <div className="signup">
                <form className="form">
                    <h1>Signup Form</h1>
                    <div className="input-fields">
                        <input type="text" name="name" value={user.name} placeholder="Enter your name" onChange={onChange} required />
                        <input type="email" name="email" value={user.email} placeholder="Enter your E-mail" onChange={onChange} required />
                        <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={onChange} required />
                        <input type="password" name="cpassword" value={user.cpassword} placeholder="Re-enter password" onChange={onChange} required />
                    </div>
                    <div className="btn">Signup</div>
                    <div>or</div>
                    <div className="btn">Login</div>
                </form>

            </div>
        </>
    )
}

export default Signup