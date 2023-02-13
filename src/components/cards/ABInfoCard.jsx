import React from "react";
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ABDivider from '../ABDivider';

export default function  ABInfoCard ({...props }) {
    const {iconName, iconBg, boxShadow, title, information, message} = props;

    return (
    <Box sx={{mt:4}}>
        <Paper sx={{borderRadius:3, pl:1}}>
            <Box sx={{display: 'flex', justifyContent:'space-between',pt:1, pr:2, pl:1}}>
                <Box sx={{
                    mt: -3,
                    display:'flex', 
                    alignItems:'center', 
                    justifyContent:'center', 
                    width:'60px', 
                    height:'60px', 
                    background: iconBg,
                    color: '#fff',
                    borderRadius: 2,
                    boxShadow:boxShadow??2,

                }}>
                    <Icon sx={{fontSize: '24px', overflow:'unset'}}>{iconName}</Icon>
                </Box>
                <Box sx={{display: 'block', textAlign:'right'}}>
                    <Typography variant='body1' sx={{mt:1}}>{title}</Typography>
                    <Typography variant='h4' sx={{fontWeight:'700'}}>{information}</Typography>
                </Box>
            </Box>
            <ABDivider />
            <Box sx={{pl:2, pb:2}}>
                <Box  sx={{mt:2}}>{message}</Box>
            </Box>
        </Paper>
    </Box>
     )
}