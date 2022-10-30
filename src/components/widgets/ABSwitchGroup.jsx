import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import ABBlockSwitch from '../ABBlockSwitch'

export default function ABSwitchesGroup(props) {
  const {groups} = props;
  const [state, setState] = React.useState(groups.items);

  const handleChange = (event) => {
    let s = state.map(item=>{
      return item.name === event.target.name?{...item, checked:event.target.checked}:item;            
    });
    setState(s);
    console.log('updated state',s);    
  };

  return (    
    <FormControl component="fieldset" variant="standard">
      <FormLabel  sx={{ mt:1,mb:1}}>
        <Typography variant='caption' >
        {groups.title}
        </Typography>
      </FormLabel>
      <FormGroup>
        {state.map((item,index)=>(
            <FormControlLabel key={index}
                control={
                <ABBlockSwitch checked={item.checked} onChange={handleChange} name={item.name} />
                }
                label={item.title}
            />
        ))}
      </FormGroup>
    </FormControl>
  );
}
