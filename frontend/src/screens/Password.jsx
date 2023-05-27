import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Password(){

    const handelSubmit = (e) =>{
        e.preventDefault();
        const password = e.target.elements.password.value;
        const cpassword = e.target.elements.cpassword.value;
        if(password === cpassword){
            axios.post('/api/users/request-reset', {password: password})
            .then(res => {
                alert(res.data.message);
            }
            )
            .catch(err => {
                console.log(err);
            }
            )
        }
        else{
            alert('Password and Confirm Password are not same');
        }
    }
    return <div>
        <form onSubmit={handelSubmit}>
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