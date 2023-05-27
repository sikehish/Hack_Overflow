import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
function Signup(){
    return <div>
        <form action='/api/auth' method='post'>
            <ul className="form-container">
                <li>
                <TextField id="outlined-basic" label="Name" variant="outlined" name='name'/>
                </li>
                <li>
                <TextField id="outlined-basic" label="Email" variant="outlined" name='email' type='email'/>
                </li>
                <li>
                <TextField id="outlined-basic" label="Password" variant="outlined" name='password' type='password'/>
                </li>
                <li>
                <TextField id="outlined-basic" label="Confirm-Password" variant="outlined" name='cpassword' type='password'/>
                </li>
                <li>
                    <Button variant="contained" color="primary" type='submit'>Signup</Button>
                </li>
            </ul>
        </form>
        <Link to='/login'><Button variant="contained" color="primary">Login</Button></Link>
    </div>
}

export default Signup;