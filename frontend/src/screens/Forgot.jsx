import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
function Forgot(){
    const handelSubmit = (e) =>{
        e.preventDefault();
        const email = e.target.elements.email.value;
            axios.post('/api/users/request-reset', {email: email})
            .then(res => {
                alert(res.data.message);
            }
            )
            .catch(err => {
                console.log(err);
            }
            )
    }
    return <div>
        <form action='/api/auth' method='post'>
            <ul className="form-container">
                <li>
                <TextField id="outlined-basic" label="Email" variant="outlined" name='email' type='email'/>
                </li>
            </ul>
        </form>
        <Link to='/login'><Button variant="contained" color="primary">Login</Button></Link>
        <Link to='/signup'><Button variant="contained" color="primary">Sign up</Button></Link>
    </div>
}

export default Forgot;