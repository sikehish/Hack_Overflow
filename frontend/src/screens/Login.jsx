import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
function Login(){
    return <div>
        {/* form for login page for user */}
        <form action='/api/' method='post'>
            <ul className="form-container">
                <li>
                <TextField id="outlined-basic" label="Username" variant="outlined" name='username'/>
                </li>
                <li>
                <TextField id="outlined-basic" label="Password" variant="outlined" name='password' type='password'/>
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