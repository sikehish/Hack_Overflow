import { Chart } from "react-google-charts";
import React, { useEffect } from "react"
import axios from "axios"

function Charte() {

    useEffect(() => {
        axios.get('/api/expenses/analysis', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if(res.data.status==='success'){
                    console.log(res.data)
                }
                else{
                    console.log('res.data.message')
                    window.location.href='/chart'
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    return (
        <Chart
            chartType="PieChart"
            data={[["Task", "Hours per Day"],
            ["Work", 11],
            ["Eat", 2],
            ["Commute", 2],
            ["Watch TV", 2],
            ["Sleep", 7],]}
            width="100%"
            height="400px"
            legendToggle
        />
    )
}

export default Charte;