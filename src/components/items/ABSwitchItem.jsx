import React from "react";
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ABBlockSwitch  from '../ABBlockSwitch'

 export default function  ABSwitchItem ({ ...props }) {
    const {image, title, lable, defaultstate} = props;
    console.log('defaultstate',defaultstate)
    const [state, setState] = React.useState(defaultstate?true: false);

    const handleChange = (event) => {    
        setState(event.target.checked);        
    };
    
    return (
        <Box
            {...props}
            sx={{
                display:'flex',
                justifyContent:'space-between'
            }}
        >
            <Box
                sx={{
                    display:'flex',
                    alignItems:'center'
                }}
            >
                <Box component={'img'}
                    sx={{
                        width: 40, height: 40
                    }}
                    src={image} 
                    alt={title} />
                <Box
                    sx={{display:'block', ml:2}}
                >
                    <Typography variant='h5' color="secondary" >{title}</Typography>
                    <Typography variant='body2' >{lable} </Typography>
                </Box>
            </Box>
            <Box sx={{display:'flex', alignItems:'center'}}>
                <Typography variant='body2' >{state?'Enabled' : 'Disabled'}</Typography>
                <ABBlockSwitch checked={+state} onClick={handleChange}/>
            </Box>
        </Box>
    );
 }

