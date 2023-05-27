import TextField from '@material-ui/core/TextField';

function Login(){
    return <div>
        {/* form for login page for user */}
        <form action='/' method='post'>
            <ul className="form-container">
                <li>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </li>
                <li>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </li>
            </ul>
        </form>
        <form>
            <Button variant="text">Forget password</Button>
        </form>
    </div>
}

export default Login;