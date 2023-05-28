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

    const handleSubmit = (e) => {
        // e.preventDefault()
        console.log(e.target.isid.value)
        axios.delete(`/api/expenses/${e.target.isid.value}`,{
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token'),
              "Content-Type": "application/json",
            },
          }
        )
        .then((res)=>{
            if(res.data.status==='success'){
                window.location.href='/expense'
            }
            else if(res.data.status==="Invalid data"){
                alert(res.data.message)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(() => {
        axios.get('/api/expenses', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (res.data.status === 'success') {
                    console.log(res.data.data[0].expenses)
                    setExp(res.data.data[0].expenses)
                }
                else {
                    console.log('res.data.message')
                    window.location.href = '/expdis'
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    const Tabledata = () => {
        return exp.map((data) => {
            // eslint-disable-next-line react/jsx-key
            return (<div>
                <tr>
                    {/* <td style={{"width":"200px"}}>{data.amount}</td>
                    <td style={{"width":"200px"}}>{data.title}</td>
                    <td style={{"width":"200px"}}>{data.tag}</td>
                    <td style={{"width":"200px"}}>{data.date}</td> */}
                    <div style={{"display":"flex","justifyContent":"stretch"}}>
                            <p style={{"width":"200px"}}>{data.amount}</p>
                            <p style={{"width":"200px"}}>{data.title}</p> 
                            <p style={{"width":"200px"}}>{data.tag}</p>
                            <p style={{"width":"200px"}}>{data.createdAt}</p>
                    </div>

                </tr>
                <form onSubmit={handleSubmit}>
                <Button variant="contained" color="primary" type='submit' name='isid' value={data._id}>Delete</Button>
                </form>
            </div>)
        })

    }


    return <div>
     
            <div style={{"display":"flex","justifyContent":"stretch"}}>
                            <p style={{"width":"200px"}}>Expense</p>
                            <p style={{"width":"200px"}}>item</p> 
                            <p style={{"width":"200px"}}>price</p>
                            <p style={{"width":"200px"}}>date</p>
                    </div>
            <Tabledata />
      
        <Button style={{ "margin": "10px 10px" }} variant="contained" color="primary" onClick={handleclickp}>Previous</Button>
        <Button variant="contained" color="primary" onClick={handelclickn}>Next</Button>
    </div>
}

export default Expdis;