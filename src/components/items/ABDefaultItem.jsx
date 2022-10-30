import React from "react";
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

 export default function  ABDefaultItem ({...props }) {
    const {icon, title, lable, color, variant} = props;
    
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
                <Icon>{icon}</Icon>
                <Box
                    sx={{display:'block', ml:2}}
                >
                    <Typography variant={variant} color={color} >{title}</Typography>
                    <Typography variant='body2' >{lable} </Typography>
                </Box>
            </Box>
        </Box>
    );
 }

