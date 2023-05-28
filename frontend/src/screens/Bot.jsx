import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DrawerAppBar from '../components/Navbar';
import SmartToyIcon from '@mui/icons-material/SmartToy';


export default function Bot() {

  
    return (
        <>
            <DrawerAppBar />
            <form action="/api/chat" method="post">
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <h1>Welcome to your finance chat bot </h1>
                        <SmartToyIcon/>
                        <h2>Some Common Questions</h2>
                        <h3>Give me some finance tips ? <br /> How can I reduce my monthly expenses? <br /> How can I save on transportation costs? <br /> How can I save on energy bills?</h3>
                        <input  placeholder='Enter your question'  type="text" name="gptqn" id="" style={{"wordWrap":"break-word","wordBreak":"break-all","height":"100px","width":"60%"}} />
                    </CardContent>
                    <CardActions>
                        <Button size="small" type='submit'>Get some insights</Button>
                    </CardActions>
                </Card>
            </form>
        </>
    )
}
