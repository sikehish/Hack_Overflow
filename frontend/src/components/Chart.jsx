import { Chart } from "react-google-charts";
import React, { useEffect } from "react"
import axios from "axios"
import DrawerAppBar from "./Navbar";

function Charte() {
    const [exp, setExp] = React.useState([])
    const [data, setData] = React.useState([["Task", "Hours per Day"]])

    useEffect(async () => {
        await axios.get('/api/expenses/analysis', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if(res.data.status==='success'){
                    setExp(res.data.data)
                    console.log(res.data)
                    const temp=exp.map((data) => {
                        return ([data._id,data.expenses])
                    })
                    console.log(temp)
                    setData([["Task", "Amount"],...temp])
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

    const Display=()=>{
        
    }

    return (
        <>
            <DrawerAppBar />
        <Chart
            chartType="PieChart"
            data={data}
            width="100%"
            height="400px"
            legendToggle
        />
        </>
        
    )
}

export default Charte;