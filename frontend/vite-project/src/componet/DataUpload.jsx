import React, { useState } from 'react'

import { ExcelRenderer } from 'react-excel-renderer';


const DataUpload = () => {
    const [state, setState] = useState({})
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
        let data = state.rows
        let rows = state.rows[0]
        let col = state.rows.slice(1)
        // console.log(data)
        //     let res = {}
        //     // let data = {}
        //     let Json_data = []
        //     for (let i = 0; i < col.length; i++) {
        //         for (let j = 0; j < col[0].length; j++) {
        //             res[rows[j]] = col[i][j]

        //         }
        //    Json_data.push(res)
        //    console.log(Json_data)
        //     }
        const coloum = data[0].map((col, ind) => {
            return {
                header: col,
            }
        })
        console.log(coloum)
        const json = data.slice(1).map((row) => {
            return row.data.reduce((acc, curr, ind) => {
                console.log(acc)
                acc[coloum[ind]] = curr;
                return acc;
            }, {})
        })
        console.log(json)
    }

    return (
        <div>
            <h3>File upload In csv/xlsx</h3>
            <input type="file" onChange={fileHandler} />
            <button className="btn btn-secondary btn-sm" onClick={upload}>upload Data</button>

        </div>
    )
}

export default DataUpload