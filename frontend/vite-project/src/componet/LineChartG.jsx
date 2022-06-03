import React, { Component } from 'react';
import LineChart from 'react-linechart';

const LineChartG = () => {

    const data = [
        {
            color: "steelblue",
            points: [{ x: 1, y: 2 }, { x: 3, y: 5 }, { x: 7, y: -3 }]
        }
    ];
    return (
        <div>
            <div className="App">
                <h1>My First LineChart</h1>
                <LineChart
                    width={600}
                    height={400}
                    data={data}
                />
            </div>
        </div>
    );
}

export default LineChartG;