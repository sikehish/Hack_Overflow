import { Chart } from "react-google-charts";
import React, { useEffect } from "react"
import axios from "axios"
import DrawerAppBar from "./Navbar";

function Charte() {
    const [exp, setExp] = React.useState([])
    const [exp2, setExp2] = React.useState([])
    const [data, setData] = React.useState([["Task", "Hours per Day"]])

    // useEffect(async () => {
    //     await axios.get('/api/expenses/analysis', {
    //         headers: {
    //             "Authorization": "Bearer " + localStorage.getItem('token'),
    //             "Content-Type": "application/json",
    //         },
    //     })
    //         .then((res) => {
    //             console.log(res)
    //             setExp(res.data.data)
    //                 let temp = res.data.data.map((data) => {
    //                     return ([data._id, data.expenses])
    //                 })
    //                 setData([["Task", "Amount"], ...temp])
    //             // else {
    //             //     console.log('res.data.message')
    //             //     window.location.href = '/chart'
    //             // }
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })

    //     axios.get('/api/expenses', {
    //         headers: {
    //             "Authorization": "Bearer " + localStorage.getItem('token'),
    //             "Content-Type": "application/json",
    //         },
    //     })
    //         .then((res) => {
    //             if (res.data.status === 'success') {
    //                 setExp2(res.data.data[0].expenses)
    //             }
    //             // else {
    //             //     console.log('res.data.message')
    //             //     window.location.href = '/expdis'
    //             // }
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }, [])

    const Display = () => {
        return exp.map((data) => {
            if (data.expenses > data.targetExpense) {
                return <div style={{"color":"red"}}>
                    <p>Your expenses in  <b>{data._id} </b> is over by {data.expenses - data.targetExpense} than your target</p>
                </div>
            }
            else {
                return <div>
                    <p>Your expenses in  <b>{data._id} </b> is less than the target by {data.expenses - data.targetExpense}</p>
                </div>
            }
        })
    }

    


    return (
        <>
            <DrawerAppBar />
            <Chart
                chartType="PieChart"
                data={[["Task", "Amount"],
                ["Food", 500],
                ["Travel", 200],]}
                width="100%"
                height="400px"
                legendToggle
            />
            <Chart
                chartType="Line"
                width="100%"
                height="400px"
                data={[["Task", "Amount"],
                ["Food", 500],
                ["Travel", 200],]}
            />
            <Display />
            <p>I admire your financial discipline. You have always been able to make wise financial decisions, even when it was difficult.</p>
        </>

    )
}

export default Charte;