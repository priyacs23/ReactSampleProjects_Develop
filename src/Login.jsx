import React, { useState } from "react";

export  const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setpass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <lable htmlFor="email">email</lable>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <lable htmlFor="password">password</lable>
                <input value={pass} onChange={(e) => setpass(e.target.value)} type="password" placeholder="***********" id="password" name="password" />
                <button type="submit">Log In</button>
             </form>
             <button className="link-btn" onClick={() => props.onFormSwitch("register")}>Don't have an account? Register here. </button>
        
        </div>
    )
}