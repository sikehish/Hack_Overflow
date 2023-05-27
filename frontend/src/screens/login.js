import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
function Login(){
    return <div>
        {/* form for login page for user */}
        <form action='/api/' method='post'>
            <ul className="form-container">
                <li>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" name='username' placeholder='Username'/>
                </li>
                <li>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" name='password' type='password'/>
                </li>
                <li>
                    <Button variant="contained" color="primary" type='submit'>Login</Button>
                </li>
            </ul>
        </form>
        <form>
            <Button variant="text">Forget password</Button>
        </form>
    </div>
}

export default Login;