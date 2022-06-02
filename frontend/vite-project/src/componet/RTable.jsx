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

           <DataUpload/>
            <hr />
            <h3 className='text-center'> Student Table</h3>
            <div className='container mx-2'>
                <table className="table">
                    <thead >
                        <tr className='table-success'>
                            <th scope="col">Sl.no</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Phone</th>
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
                                    <td>{ele.phone}</td>
                                    <td> <button className="btn-primary btn-sm"></button></td>
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