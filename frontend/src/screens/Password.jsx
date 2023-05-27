import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
function Password(){
    return <div>
        <form action='/api/auth' method='post'>
            <ul className="form-container">
            <li>
                <TextField id="outlined-basic" label="Password" variant="outlined" name='password' type='password'/>
            </li>
            <li>
                <TextField id="outlined-basic" label="Confirm-Password" variant="outlined" name='cpassword' type='password'/>
            </li>
            <li>
                <Button variant="contained" color="primary" type='submit'>Change Password</Button>
            </li>
            </ul>
        </form>
    </div>
}

export default Password;