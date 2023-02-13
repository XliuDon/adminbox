import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import {ABIcon} from '../icons/ABIcon';

export default function ABNotificationCard({notification}) {
  return (    
    <Paper elevation={3} 
            sx={{
                borderRadius:3,
            }} >
        <Box>
            <Box sx={{
                p:2,
                display:'flex',
                alignItems:'center'
            }}>
                <Box sx={{
                    display: 'flex',
                    background: "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
                    color: '#fff',
                    borderRadius: 3,
                    width: '64px',
                    height: '64px',
                    justifyContent:'center',
                    alignItems: 'center',
                    mr: 2,
                }}>
                    <ABIcon iconName={notification.icon}/>
                </Box>
                <Box sx={{
                    display:'block',
                    justifyContent:'flex-end',
                    textAlign:'right',                    
                    flexGrow: 1
                }}>
                    <Box><Typography variant='button'>{notification.title}</Typography></Box>
                    <Box><Typography variant='h5'>{notification.info}</Typography></Box>
                </Box>
            </Box>
        </Box>
    </Paper>
  );
}
