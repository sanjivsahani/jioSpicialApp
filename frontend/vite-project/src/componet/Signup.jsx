import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';


const Signup = () => {
    const navigate = useNavigate()
    const [userDetail, setUserDetail] = useState({
        name: "",
        email: "",
        password:""
    })
    const handleChange = (e) => {
        setUserDetail({...userDetail,[e.target.name]:e.target.value})
    }
    const signup_func = () => {
        
        axios.post("http://localhost:8000/api/user/signup", userDetail).then((data) => {
            let res = (data.data)
            console.log(res)
            if (res.sucess === true) {
                localStorage.setItem("token", res.token)
                navigate('/page')
            } else {
                console.log(data.response.data)
            }
            
        })
    }
    

    return (

        <div className="log_container">
            <header className='text-center border  '>
                <h3 className='text-info'>Signup Form </h3>
            </header>
            <div className=" container my-3">
            <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Enter  your name</label>
                    <input type="text" className="form-control" required name = "name" onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" required name = "email" onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">password</label>
                    <input type="password" className="form-control"required name = "password" onChange={handleChange}></input>
                </div>
            </div>
            <div className="d-grid gap-2 mx-2">
                <button className="btn btn-info btn-sm btn-block" type="button" onClick={signup_func}>signUp</button>
            </div>
            <div className='text-center my-2'>
                
            <span text-bold>
                    Already have an account<Link to="/" >Login </Link>
                </span>
                     
               
            </div>
        </div>


    )
}

export default Signup