import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import DrawerAppBar from '../components/Navbar';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function Home() {

    const Form = () => {

        // eslint-disable-next-line react/jsx-key
        return (<>
            <div style={{ "display": "flex", "justifyContent": "space-around", "margin": "4px" }}>
                <p style={{ "margin": "0" }}>Food </p>
                <FastfoodIcon />
            </div>
            <TextField id="outlined-basic" label="Percentage" variant="outlined" name="Food" />
            <div style={{ "display": "flex", "justifyContent": "space-around", "margin": "4px" }}>
                <p style={{ "margin": "0" }}>Travel </p>
                <DriveEtaIcon />
            </div>
            <TextField id="outlined-basic" label="Percentage" variant="outlined" name="Travel" />
            <div style={{ "display": "flex", "justifyContent": "space-around", "margin": "4px" }}>
                <p style={{ "margin": "0" }}>Shopping </p>
                <ShoppingCartIcon />
            </div>
            <TextField id="outlined-basic" label="Percentage" variant="outlined" name="Shopping" />
            <div style={{ "display": "flex", "justifyContent": "space-around", "margin": "4px" }}>
                <p style={{ "margin": "0" }}>Others </p>
                <MoreVertIcon />
            </div>
            <TextField id="outlined-basic" label="Percentage" variant="outlined" name="Others" />

        </>) 
           
        
}

const handelsubmit = (e) => {
    e.preventDefault()
    var data = []
    data = [{
        category: 'Budget',
        amount: e.target.budget.value
    }, {
        category: 'Food',
        percentage: e.target.Food.value
    },
    {
        category: 'Travel',
        percentage: e.target.Travel.value
    },
    {
        category: 'Shopping',
        percentage: e.target.Shopping.value
    },
    {
        category: 'Others',
        percentage: e.target.Others.value
    }]
    console.log(data)
    axios.post('/api/budget', JSON.stringify(data), {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('token'),
            "Content-Type": "application/json",
        },
    }).then((res) => {
        if (res.data.status === 'success') {
            window.location.href = '/expense'
        }
        else {
            alert(res.data.message)
            window.location.href = '/'
        }
    }
    ).catch((err) => {
        console.log(err)
    })
}

return (<>
    <DrawerAppBar />
    <div className="container" style={{ "padding": "20px 0" }}>
        <div className="row">
            <div className="col-md-12 text-center">
                <p style={{ "margin": "0","padding":"0", "fontSize": "3rem" }} className="animate-charcter"> Track money , Save money</p>
            </div>
        </div>
    </div>
    <div style={{ "display": "flex", "justifyContent": "space-evenly"}}>
        <img src="images/home.png" alt="" style={{ "width": "45%", "margin": "0" }} />
        <div style={{"padding":"10px 40px","border":"1px solid" }}>
            <form onSubmit={handelsubmit}>
                <ul style={{ "listStyle": "none","padding":"10px 50px" }} className="form-container">
                    <div style={{ "display": "flex", "justifyContent": "space-around", "margin": "2px" }}>
                        <p style={{ "margin": "0" }}>Enter Your Budget </p>
                        <CurrencyRupeeIcon />
                    </div>

                    <TextField id="outlined-basic" label="Budget" variant="outlined" name="budget" />
                    <Form />
                </ul>
                <Button variant="contained" color="primary" type='submit'>Submit</Button>
            </form>
        </div>
    </div>

</>)
}

