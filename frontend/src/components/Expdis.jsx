import { Button } from "@mui/material"
import React, { useEffect } from "react"
import axios from "axios"
function Expdis() {
    const [exp, setExp] = React.useState([])

    const handleclickp = () => {
        console.log("previous") //change the exparray to previous 3 values
    }
    const handelclickn = () => {
        console.log("next")     //change the exparray to next 3 values
    }


    useEffect(() => {
        axios.get('/api/expenses', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if(res.data.status==='success'){
                console.log(res.data.data[0].expenses)
                setExp(res.data.data[0].expenses)
                }
                else{
                    console.log('res.data.message')
                    window.location.href='/expdis'
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    const Tabledata = () => {
        return exp.map((data) => {
            return (<div>
                <tr>
                    <td>{data.amount}</td>
                    <td>{data.title}</td>
                    <td>{data.tag}</td>
                    <td>{data.date}</td>
                </tr>
            </div>)
        })

    }


    return <div>
        <table>
            <tr>
                <th>Expense</th>
                <th>Title</th>
                <th>Category</th>
                <th>Date</th>
            </tr>
            <Tabledata />
        </table>
        <Button variant="contained" color="primary" onClick={handleclickp}>Previous</Button>
        <Button variant="contained" color="primary" onClick={handelclickn}>Next</Button>
    </div>
}

export default Expdis;