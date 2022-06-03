import React, { useState } from 'react'
import './Login.css'
import { Link ,useNavigate } from "react-router-dom";
import axios from 'axios';


const Login = () => {
    let navigate = useNavigate();
    const [userDetail, setUserDetail] = useState({
        email: "",
        password:""
    })
    const handleChange = (e) => {
        setUserDetail({...userDetail,[e.target.name]:e.target.value})
    }
    const login_Func = () => {
        axios.post("http://localhost:8000/api/user/login", userDetail).then((data) => {
            let res = (data.data)
            if (res.sucess === true) {
                localStorage.setItem("token", res.token)
                navigate('/page')
            } else {
                alert("please enter a valid crediantial")
            }
        })
    }

    return (

        <div className="log_container">
            <header className='text-center border  '>
                <h3 className='text-info'>Login Form </h3>
            </header>
            <div className=" container my-3">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={handleChange} required name = "email"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">password</label>
                    <input type="password" className="form-control" onChange={handleChange} required name = "password"></input>
                </div>
            </div>
            <div className="d-grid gap-2 mx-2">
                <button className="btn btn-info btn-sm btn-block" type="button" onClick={login_Func}>Login</button>
            </div>
            <div className='text-center my-2 flex'>
                <span>
                    Dont have an account<Link to="/table" >Signup </Link>
                </span>


            </div>
        </div>


    )
}

export default Login