import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import {ABIcon} from '../icons/ABIcon';

export default function ABEvents({events}) {
  return (    
    <Paper elevation={3} 
        sx={{
            borderRadius:3,
            position: 'sticky',
            top: '1%',
        }} >
        <Box sx={{padding:"16px 16px 0 16px"}}>
            <Typography variant='h6' color="primary">{events.title}</Typography>
            <Typography variant='button'>{events.subtitle}</Typography>
        </Box>
        <Box>
            <List sx={{ width: '100%' }}>
            {events.events.map((item,index)=>(
                <ListItem key={index}>
                    <Box sx={{
                        display: 'flex',
                        background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
                        color: '#fff',
                        borderRadius: 3,
                        width: '48px',
                        height: '48px',
                        justifyContent:'center',
                        alignItems: 'center',
                        mr: 2
                    }}>
                        <ABIcon iconName={item.icon}/>
                    </Box>
                    <ListItemText primary={item.title} secondary={item.description} />
                </ListItem>
            ))}
            </List>            
        </Box>
    </Paper>
  );
}
