import axios from "axios";
import { Chart } from "react-google-charts";
import { useEffect,useState } from "react";

function Charte() {
    const [exp, setExp] = useState([])
    useEffect(() => {
        axios.get('/api/expenses/analysis', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if(res.data.status==='success'){
                console.log("hi",res.data.data[0].expenses)
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