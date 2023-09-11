import React, { useState } from "react";

export  const Register = (props) => {
    const [email, setEmail] = useState('');   
    const [pass, setpass] = useState('');
    const [name,setName] =useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <lable htmlFor="name">Full name</lable>
                <input value={name} onChange={(e) => setName(e.target.value)} type="name" id="name" placeholder="Full name" />
                <lable htmlFor="email">Email</lable>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <lable htmlFor="password">Password</lable>
                <input value={pass} onChange={(e) => setpass(e.target.value)} type="password" placeholder="***********" id="password" name="password" />
                <button type="submit">Register</button>
             </form>
             <button className="link-btn" onClick={() => props.onFormSwitch("login")}>Already have an account? Register here. </button>
        
        </div>
    )
}   