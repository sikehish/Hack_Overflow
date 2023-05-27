import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import axios from 'axios';
import React from 'react';

function Signup() {
    const [data, setData] = React.useState({ name: '', email: '', password: '', confirmPassword: '' })

    // useEffect(()=>{
    //     axios.post('/api/users/signup',data)
    // },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        setData(
            {
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value,
                confirmPassword: e.target.confirmPassword.value
            }
        )
        axios.post('/api/users/signup', JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (res.data.status === 'success') {
                    res.redirect('/')
                }
                else {
                    alert(res.data.message)
                    res.redirect('/signup')
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <div style={{ "display": "flex", "justifyContent": "space-around" }}>
                <img src="images/signup.svg" alt="" />
                <div style={{ "padding": "10px 35px","border":"1px solid" }}>
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <ul className="form-container" style={{ "listStyle": "none", "padding": "2px 0" }}>
                            <li style={{ "padding": "10px 60px" }}>
                                <TextField id="outlined-basic" label="Name" variant="outlined" name='name' />
                            </li>
                            <li style={{ "padding": "10px 60px" }}>
                                <TextField id="outlined-basic" label="Email" variant="outlined" name='email' type='email' />
                            </li>
                            <li style={{ "padding": "10px 60px" }}>
                                <TextField id="outlined-basic" label="Password" variant="outlined" name='password' type='password' />
                            </li>
                            <li style={{ "padding": "10px 60px" }}>
                                <TextField id="outlined-basic" label="Confirm-Password" variant="outlined" name='confirmPassword' type='password' />
                            </li>
                            <li style={{ "padding": "10px 60px" }}>
                                <Button variant="contained" color="primary" type='submit'>Signup</Button>
                            </li>
                        </ul>
                    </form>
                    <Link to='/login'><Button variant="contained" color="primary">Login</Button></Link>
                </div>

            </div>


        </>
    )
}

export default Signup;