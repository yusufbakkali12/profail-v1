import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './index.css'
const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const [token, setToken] = useState("");
    const navigate = useNavigate();


    useEffect(()=>{
        localStorage.removeItem("authorization");
        console.log(localStorage.removeItem("authorization"))
    },[])


    const postLoginDetails = () => {
        fetch("http://localhost:2424/auth/login", {
            method: "POST",
            body: JSON.stringify({
                email,
                password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) =>res.json())
            .then((data) => {
                
                localStorage.setItem( "authorization", data.token);
                setToken(data.token);
                setErr(data.message);
                if(data.token){
                    gotodashboardPage();
                } 
            })
            .catch((errur) => console.log(errur));
};


  

    const handleSubmit = (e) => {
        e.preventDefault();
        postLoginDetails();
        setPassword("");
    };
    const gotoSignUpPage = () => navigate("/");
    const gotodashboardPage = () => navigate("/dashboard/");

    return (
        <div className='login__container'>
            <h1>Login</h1>
            <form className='login__form' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    id='email'
                    name='email'
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    minLength={8}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {!err?"":<p className="err">{err}</p>}
                
                <button className='loginBtn'>SIGN IN</button>
                <p>
                    Don't have an account?{" "}
                    <span className='link' onClick={gotoSignUpPage}>
                        go Back
                    </span>
                </p>
                
                
            </form>
        </div>
    );
};

export default Login;
