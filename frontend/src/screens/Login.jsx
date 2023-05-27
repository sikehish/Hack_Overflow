import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
function Login() {
    const [datal,setDatal]=React.useState({email:'',password:''})

    const handleSubmit=(e)=>{
        e.preventDefault()
        setDatal(
            {
                email:e.target.email.value,
                password:e.target.password.value,
            }
        )
        axios.post('/api/users/login',JSON.stringify(datal),{
            headers: {
              "Content-Type": "application/json",
            },
          })
        .then((res)=>{
            if(res.data.status==='success'){
                localStorage.setItem('token',res.data.data.token)
                window.location.href='/'
            }
            else{
                alert(res.data.message)
                window.location.href='/login'
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <ul className="form-container">
                <li>
                    <TextField id="outlined-basic" label="Email" variant="outlined" name='email' type='email' />
                </li>
                <li>
                    <TextField id="outlined-basic" label="Password" variant="outlined" name='password' type='password' />
                </li>
                <li>
                    <Button variant="contained" color="primary" type='submit'>Login</Button>
                </li>
            </ul>
        </form>
        <Link to='/signup'><Button variant="contained" color="primary">Signup</Button></Link>
        <form>
            <Button variant="text">Forget password</Button>
        </form>
    </div>
}

export default Login;