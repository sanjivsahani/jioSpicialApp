import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataUpload from './DataUpload'
const RTable = () => {
    const [Data, setdata] = useState([])

    const fetch_student = () => {
        const config = {
            headers: {
                //   we are finding the token from localstorage
                Authorization: localStorage.getItem("token"),
            }
        };
        axios.get("http://localhost:8000/api/student/getstudent", config).then((data) => {
            setdata(data.data.student)
        })
    }
    useEffect(() => {
        fetch_student()
    }, [])

    return (
        <>

            <DataUpload />
            <hr />
            <div className="container d-flex">
                <div className="container">

                    <h3 className='text-center'> Student Table</h3>
                </div>
                <div className="container d-flex m-2">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-success btn-sm" type="submit">Search</button>

                </div>

            </div>


            <div className='container mx-2'>
                <table className="table">
                    <thead >
                        <tr className='table-success'>
                            <th scope="col">Sl.no</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Student ID</th>
                            <th scope="col">Student ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Data.map((ele, ind) => {
                                return <tr className='table-warning'>
                                    <th scope="row">{ind + 1}</th>
                                    <td>{ele.name}</td>
                                    <td>{ele.age} year</td>
                                    <td>{ele.contact}</td>
                                    <td>{ele.studentId}</td>
                                    <td>
                                        <button className='btn btn-primary btn-sm mx-2' >Edit</button>
                                        <button className='btn btn-danger btn-sm mx-2' >del</button>

                                    </td>

                                </tr>

                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default RTable