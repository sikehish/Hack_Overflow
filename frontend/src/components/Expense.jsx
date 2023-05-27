import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import axios from 'axios';
import React from 'react';
function Expense() {
    var categories = ['Food', 'Travel', 'Shopping', 'Others']
    var tabledata = [""]

    function Options(){
        return categories.map((cat) => {
            // eslint-disable-next-line react/jsx-key
            return <option value={cat}>{cat}</option>
        })
    }

    const [datal,setDatal]=React.useState({})

    const handleSubmit=(e)=>{
        e.preventDefault()
        setDatal(
            {
                amount:e.target.expense.value,
                title:e.target.title.value,
                tag:e.target.cat.value
            }
        )
        console.log(localStorage.getItem('token'))
        axios.post('/api/expenses',JSON.stringify( {
            amount:e.target.expense.value,
            title:e.target.title.value,
            tag:e.target.cat.value
        }),{
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token'),
              "Content-Type": "application/json",
            },
          })
        .then((res)=>{
            if(res.data.status==='success'){
                window.location.href='/expense'
            }
            else if(res.data.status==="Invalid data"){
                alert(res.data.message)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (<div>
        <form onSubmit={handleSubmit}>
            <ul className="form-container">
                <li>
                    <TextField id="outlined-basic" label="Expense" variant="outlined" name='expense' />
                </li>
                <li>
                    <TextField id="outlined-basic" label="Title" variant="outlined" name='title' />
                </li>
                <li>
                    <label for="cat">Choose a categorie:</label>
                    <select name="cat" id="cat">
                        <Options />
                    </select>
                </li>
                <li>
                    <Button variant="contained" color="primary" type='submit'>Add +</Button>
                </li>
            </ul>
        </form>
    </div>)
}

export default Expense;