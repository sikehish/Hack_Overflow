import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DrawerAppBar from '../components/Navbar';



export default function Bot() {
    return (
        <>
            <DrawerAppBar />
            <form action="/bot" method="post">
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <h1>Welcome to your finance chat bot </h1>
                        <h3>Get insights for</h3>
                        <label htmlFor="">Finance</label>
                        <input type="radio" name="opt" value="finance" />
                        <label htmlFor="">Buisness</label>
                        <input type="radio" name="opt" value="buisness" />
                        <label htmlFor="">Market</label>
                        <input type="radio" name="opt" value="market" />
                    </CardContent>
                    <CardActions>
                        <Button size="small" type='submit'>Get some insights</Button>
                    </CardActions>
                </Card>
            </form>
        </>
    )
}
