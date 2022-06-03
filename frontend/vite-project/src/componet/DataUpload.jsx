import axios from 'axios';
import React, { useState } from 'react'

import { ExcelRenderer } from 'react-excel-renderer';


const DataUpload = () => {
    const [state, setState] = useState({})
    const [fileData,setfileData]= useState([])
    const fileHandler = (event) => {
        let fileObj = event.target.files[0];

        //just pass the fileObj as parameter
        ExcelRenderer(fileObj, (err, resp) => {
            if (err) {
                console.log(err);
            }
            else {
                setState({
                    cols: resp.cols,
                    rows: resp.rows
                });
            }
        });

    }
    
    const upload = () => {
        let Json_data = []

        let rows = state.rows[0]
        let col = state.rows.slice(1)
        for (let i = 0; i < col.length; i++) {
            let res = {}
            for (let j = 0; j < col[0].length; j++) {
                res[rows[j]] = col[i][j]
            }
            Json_data.push(res)
        }
        setfileData(Json_data)
        console.log(fileData)
       async function dataupload () {
            try {
                var config = {
                    headers: {
                        //   we are finding the token from localstorage
                        Authorization: localStorage.getItem("token"),
                    }
                };
                console.log(config)
                let response =  await axios.post("http://localhost:8000/api/student/post", fileData,config,) 
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        } dataupload()
    }
  

    return (<>
        <h2 className='text-center text-danger '> File Upload CSV/XLSX </h2>
        <div className='border border-dark my-2 p-3 d-flex bg-secondary'>
            <input type="file" onChange={fileHandler} className="border border-light bg-light mx-1" />
            <button className="btn btn-warning   d-flex" onClick={upload}>upload Data</button>
            <h4 className='text-center text-warning mx-3'>File upload In csv/xlsx</h4>

        </div>
    </>
    )
}

export default DataUpload