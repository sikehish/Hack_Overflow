import React from 'react';
import TextField from '@mui/material/TextField';
import _ from 'lodash';

const Form=(props)=>{
    let card = [];
_.times(props.count, (i) => {
  card.push(<li>
    <TextField id="outlined-basic" label="Categories" variant="outlined" name={i} />
    <TextField id="outlined-basic" label="percentage" variant="outlined" name={(i+1)*10} />
</li>);
});

return card.map((item)=>{
    return item
})
}

export default Form;