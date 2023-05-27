import DrawerAppBar from '../components/Navbar'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';


export default function Home() {

    const [selectedOptions, setSelectedOptions] = React.useState([]);
    const [selectedPercent, setPercentOptions] = React.useState([]);

    const option = document.getElementById('options').value;
    const percent = document.getElementById('percents').value;

    
    const handleOptionChange = () => {
        const selectedOption = option;
        setSelectedOptions((prevOptions) => [...prevOptions, selectedOption]);
    };
    const handlePercentChange = () => {
        const selectedPercent = percent;
        setPercentOptions((prevPercent) => [...prevPercent, selectedPercent]);
    };
    const handleCategory = () => {
        handleOptionChange();
        handlePercentChange();
     
        return (
            <>
                
                <Text/>
            </>
        )
    }
    const Text=()=>{
            <div>
                    {selectedOptions.map((option, index) => (
                        <li key={index}>{option}</li>
                    ))}
                    {selectedPercent.map((percent, index) => (
                        <li key={index}>{percent}</li>
                    ))}
                </div> 
    }

    return (
        <>
            <DrawerAppBar />
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <form action='api/expense' method='post'>
                        <ul style={{ "listStyle": "none", "padding": "0px" }} className="form-container">
                            <label ><h2>Enter your Budget</h2></label>
                            <li>
                                <TextField id="outlined-basic" variant="outlined" name='budget' type='text' />
                            </li>
                        </ul>
                        <div style={{ "display": "flex", "justifyContent": "space-between" }}>
                            <div>
                                <div >
                                    <select name='options' style={{ "listStyle": "none" }} >
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                    <select name='percents' style={{ "listStyle": "none" }} >
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="75">75</option>
                                    </select>
                                    <button onClick={handleCategory}>Add</button>
                                    <div>
                                        <p>Selected Options:</p>
                                        <handleCategory></handleCategory>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" type='submit'>Submit</Button>
                </CardActions>
            </Card>
        </>

    );
}

