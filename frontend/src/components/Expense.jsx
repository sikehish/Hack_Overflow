import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
function Expense() {
    var categories = ['Food', 'Travel', 'Shopping', 'Others']
    var tabledata = [""]

    function Options(){
        return categories.map((cat) => {
            return <option value={cat}>{cat}</option>
        })
    }
    return (<div>
        <form action='/api/' method='post'>
            <ul className="form-container">
                <li>
                    <TextField id="outlined-basic" label="Expense" variant="outlined" name='expense' />
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