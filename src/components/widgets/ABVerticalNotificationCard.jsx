import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {ABIcon} from '../icons/ABIcon';
import ABDivider from '../ABDivider';

export default function ABVerticalNotificationCard({notification}) {
  return (    
    <Paper elevation={3} 
            sx={{
                borderRadius:3,
            }} >
        <Box sx={{
            p:2,
        }}>
            <Box sx={{
                pb:2,
                display:'flex',
                justifyContent:'center'
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
                }}>
                    <ABIcon iconName={notification.icon}/>
                </Box>
            </Box>
            <Box>
                <Box sx={{
                    display:'block',
                    alignItems:'center',
                    justifyContent: 'center'
                }}>
                    <Box sx={{textAlign:'center'}}><Typography variant='h5'>{notification.title}</Typography></Box>
                    <Box sx={{textAlign:'center'}}><Typography variant='button'>{notification.info}</Typography></Box>
                </Box>
                <ABDivider />
                <Box sx={{textAlign:'center'}}><Typography variant='h5'>{notification.value}</Typography></Box>
            </Box>
        </Box>
    </Paper>
  );
}
