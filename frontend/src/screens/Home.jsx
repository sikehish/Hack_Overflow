import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import DrawerAppBar from '../components/Navbar';


export default function Home() {
    let categories = ['Food', 'Travel', 'Shopping', 'Others']

    const Form = () => {
        return categories.map((cat) => {
            // eslint-disable-next-line react/jsx-key
            return <li>
                <p>{cat}</p>
                <TextField id="outlined-basic" label="Percentage" variant="outlined" name={cat} />
            </li>
        })
    }

    const handelsubmit = (e) => {
        e.preventDefault()
        var data = []
        data = [{
            category: 'Enter Your Budget',
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
        <div className="container" style={{"padding":"15px 0"}}>
            <div className="row">
                <div className="col-md-12 text-center">
                    <p style={{"margin":"0","fontSize":"3rem"}} className="animate-charcter"> Track money , Save money</p>
                </div>
            </div>
        </div>
        <div style={{ "display": "flex", "justifyContent": "space-evenly" }}>
            <img src="images/home.png" alt="" style={{ "width": "50%","margin":"0" }} />
            <div>
                <form onSubmit={handelsubmit}>
                    <ul style={{ "listStyle": "none" }} className="form-container">
                        <p>Budget</p>
                        <TextField id="outlined-basic" label="Budget" variant="outlined" name="budget" />
                        <Form />
                    </ul>
                    <Button variant="contained" color="primary" type='submit'>Submit</Button>
                </form>
            </div>
        </div>

    </>)
}

