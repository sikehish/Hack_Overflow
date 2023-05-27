import { Button } from "@mui/material"
function Expdis() {
    const exparray=[{expname:"abc",expcat:"xyz",expdate:"12/12/2020"},{expname:"abc",expcat:"xyz",expdate:"12/12/2020"},{expname:"abc",expcat:"xyz",expdate:"12/12/2020"}]



    const handleclickp=()=>{
        console.log("previous") //change the exparray to previous 3 values
    }
    const handelclickn=()=>{
        console.log("next")     //change the exparray to next 3 values
    }

    const Tabledata=()=>{
        return exparray.map((data)=>{
            return (<div>
            <tr>
                <td>{data.expname}</td>
                <td>{data.expcat}</td>
                <td>{data.expdate}</td>
            </tr>
            </div>)
    })
}


    return <div>
        <table>
            <tr>
                <th>Expense</th>
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