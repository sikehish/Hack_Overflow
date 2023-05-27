import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
function Signup(){
    return <div>
        <form action='/api/auth' method='post'>
            <ul className="form-container">
                <li>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" name='username' placeholder='Username'/>
                </li>
                <li>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" name='email' type='email'/>
                </li>
                <li>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" name='password' type='password'/>
                </li>
                <li>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" name='cpassword' type='password'/>
                </li>
                <li>
                    <Button variant="contained" color="primary" type='submit'>Signup</Button>
                </li>
            </ul>
        </form>
        <form>
            <Button variant="text">Forget password</Button>
        </form>
    </div>
}

export default Signup;